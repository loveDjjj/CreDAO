import React, { useState, useEffect } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DetailIcon from "./icons";
import { VideoTypes } from "./VideoTypes";
import { fetchChannelInfo } from "../../API";

const VideoCard: React.FC<{ video: VideoTypes }> = ({ video }) => {
  const { id, snippet } = video;
  const [channelTitle, setChannelTitle] = useState<string>("");
  const [channelAvatar, setChannelAvatar] = useState<string>("");
  const [viewCount, setViewCount] = useState<number | undefined>(0);
  const [publishedAt, setPublishedAt] = useState<string>("");

  useEffect(() => {
    const fetchChannel = async () => {
      if (snippet?.channelId) {
        const channelInfo = await fetchChannelInfo(snippet.channelId);
        if (channelInfo) {
          setChannelTitle(channelInfo.title);
          setChannelAvatar(channelInfo.thumbnails.default.url);
        }
      }
    };

    fetchChannel();
  }, [snippet?.channelId]);

  useEffect(() => {
    setViewCount(snippet.statistics?.viewCount);
    setPublishedAt(snippet.publishedAt);
  }, [id.videoId]);

  return (
    <Box
      sx={{
        width: 288,
        marginRight: 3,
        marginBottom: 5,
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
      }}
    >
      <Link
        to={id?.videoId ? `/video/${id.videoId}` : "/video/cV2gBU6hKfY"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 288, height: 162, borderRadius: "10px" }}
        />
      </Link>

      <Box sx={{ width: 288, display: "flex" }}>
        <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
          <img
            src={channelAvatar}
            alt={channelTitle}
            width={25}
            height={25}
            style={{ borderRadius: "50%" }}
          />
        </Box>

        <Box sx={{ marginTop: "10px", width: "calc(100% - 60px)" }}>
          <Typography
            sx={{
              lineHeight: "18px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              variant: "subtitle1",
              fontSize: "14px",
              color: "#000",
            }}
          >
            <Link to={id?.videoId ? `/video/${id.videoId}` : "/"}>
              {snippet?.title}
            </Link>
          </Typography>

          <Typography
            sx={{ fontSize: "10px", fill: "#7F7F7F", marginTop: "5px" }}
          >
            {snippet?.channelTitle}
          </Typography>

          <Typography
            sx={{ fontSize: "10px", fill: "#7F7F7F", marginTop: "2px" }}
          >
            观看次数: {viewCount} • 发布时间: {publishedAt}
          </Typography>
        </Box>

        <Box sx={{ marginTop: "10px", marginLeft: "5px" }}>
          <DetailIcon fill="#7F7F7F" width={20} height={20} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoCard;
