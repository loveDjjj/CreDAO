import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import DetailIcon from "./icons";
import VideoList from "./VideoList";
import { VideoTypes } from "./VideoTypes";
import { fetchVideoInfo, fetchChannelInfo } from "../../API"; // 导入从 API 中获取视频和频道信息的函数
import Loader from "../Loader";

const VideoDetail: React.FC = () => {
  const [videoDetail, setVideoDetail] = useState<VideoTypes | null>(null);
  const [videos, setVideos] = useState<VideoTypes[] | null>(null);
  const { id } = useParams<{ id: string }>() ?? { id: "" };

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; // 如果 id 为空，则直接返回

      try {
        const videoDetailData = await fetchVideoInfo(id);
        const relatedVideosData = await fetchChannelInfo(
          videoDetailData.snippet.channelId,
        );
        setVideoDetail(videoDetailData);
        setVideos(relatedVideosData.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!videoDetail) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, statistics = {} },
  } = videoDetail;

  const { viewCount = 0, likeCount = 0 } = statistics;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="subtitle1" color="#fff">
                  {channelTitle}
                  <DetailIcon fill="#7F7F7F" width={24} height={24} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {viewCount.toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {likeCount.toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <VideoList videoList={videos || []} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
