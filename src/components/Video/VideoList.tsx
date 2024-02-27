import React from "react";
import { Stack, Box } from "@mui/material";
import Loader from "../Loader";
import VideoCard from "./VideoCard";
import { VideoTypes } from "./VideoTypes";

const VideoList: React.FC<VideoListProps> = ({
  videoList,
  direction,
  maxCards,
}) => {
  // 如果视频列表为空，显示加载器
  if (!videoList?.length) return <Loader />;

  // 如果提供了最大卡片数量，则对视频列表进行截取
  const slicedVideoList = maxCards ? videoList.slice(0, maxCards) : videoList;

  return (
    // 使用 Stack 组件包裹视频卡片列表，支持灵活布局
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      marginTop="10px"
    >
      {slicedVideoList.map((video, index) => (
        // 使用 Box 组件包裹每个视频卡片
        <Box key={index}>
          {/* 如果视频的唯一标识符存在，则渲染视频卡片 */}
          {video.id.videoId && <VideoCard video={video} />}
        </Box>
      ))}
    </Stack>
  );
};

// VideoListProps 接口定义了 VideoList 组件的属性类型
interface VideoListProps {
  videoList: VideoTypes[]; // 视频列表数据
  direction?: "row" | "column"; // 视频列表方向，默认为行
  maxCards?: number; // 最大卡片数量
}

export default VideoList;
