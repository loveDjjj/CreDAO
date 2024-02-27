import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { searchVideos } from "../API"; // 导入搜索视频的函数
import VideoList from "./Video/VideoList";
import { VideoTypes } from "./Video/VideoTypes";
import Sidebar from "./SideBar/SideBar"; // 将 Sidebar 直接引入

const Feed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [videos, setVideos] = useState<VideoTypes[] | null>(null); // 修改视频类型为 VideoTypes[]
  const { searchTerm: paramSearchTerm } = useParams<{ searchTerm?: string }>();

  useEffect(() => {
    if (paramSearchTerm !== undefined) {
      // 修改此处，将条件改为判断是否为 undefined
      setSearchTerm(paramSearchTerm || ""); // 修改此处，将空字符串作为备选值
      setSelectedCategory(""); // 清空侧边栏选中状态
    } else {
      setSearchTerm(""); // 清空搜索词
    }
  }, [paramSearchTerm]);

  useEffect(() => {
    if (!searchTerm) return;

    // 使用搜索视频的函数搜索视频
    searchVideos(searchTerm)
      .then((data) => setVideos(data))
      .catch((error) => {
        console.error("Error searching videos:", error);
        setVideos([]);
      });
  }, [searchTerm]);

  useEffect(() => {
    if (!selectedCategory) return;

    const url = `search?part=snippet&q=${selectedCategory}`;

    searchVideos(selectedCategory)
      .then((data) => setVideos(data))
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setVideos([]);
      });
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <Box
        sx={{
          width: "200px",
          height: "90vh",
          px: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflowY: "hidden", // 修改为隐藏滚动条
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          handleCategoryChange={handleCategoryChange}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ textAlign: "center", color: "#7F7F7F" }}
        >
          © CreDAO Users Version
        </Typography>
      </Box>
      <Box p={0} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <VideoList videoList={videos || []} maxCards={20} />
      </Box>
    </Stack>
  );
};

export default Feed;
