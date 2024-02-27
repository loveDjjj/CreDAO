import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import DetailIcon from "./icons";
import { fetchVideoInfo } from "../../API"; // 导入从 API 中获取视频和频道信息的函数
import Loader from "../Loader";

const VideoDetail: React.FC = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams<{ id: string }>() ?? { id: "" };

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; // 如果 id 为空，则直接返回

      try {
        const videoDetailData = await fetchVideoInfo(id);
        setVideoDetail(videoDetailData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!videoDetail) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
  } = videoDetail;

  return (
    <Box minHeight="92vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} width={288}>
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
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
