import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { searchVideos, fetchFromAPI } from "../../utils/API"; // 导入搜索视频的函数
import VideoList from "../Video/VideoList";
import Sidebar from "../SideBar/SideBar";
import { VideoTypes } from "../Video/VideoTypes";

const Feed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [videos, setVideos] = useState<VideoTypes[] | null>(null); // 修改视频类型为 VideoTypes[]
  const { searchTerm: paramSearchTerm } = useParams<{ searchTerm?: string }>();

  useEffect(() => {
    if (paramSearchTerm) {
      setSearchTerm(paramSearchTerm);
      setSelectedCategory(""); // 清空侧边栏选中状态
    } else {
      setSearchTerm(""); // 清空搜索词
    }
  }, [paramSearchTerm]);

  useEffect(() => {
    let url = "";
    if (searchTerm) {
      url = `search?part=snippet&q=${searchTerm}`;
    } else {
      url = `search?part=snippet&q=${selectedCategory}`;
    }

    fetchData(url);
  }, [selectedCategory, searchTerm]);

  const fetchData = async (url: string) => {
    try {
      const data = await fetchFromAPI(url);
      setVideos(data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideos([]);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <SidebarFeed
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <Box p={0} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <VideoList videoList={videos || []} />
      </Box>
    </Stack>
  );
};

const SidebarFeed: React.FC<{
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
}> = ({ selectedCategory, handleCategoryChange }) => {
  return (
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
        setSelectedCategory={handleCategoryChange}
      />
      <Typography
        className="copyright"
        variant="body2"
        sx={{ textAlign: "center", color: "#7F7F7F" }}
      >
        © CreDAO Users Version
      </Typography>
    </Box>
  );
};

const SearchFeed: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [videos, setVideos] = useState<VideoTypes[] | null>(null);
  const { searchTerm: paramSearchTerm } = useParams<{ searchTerm?: string }>();

  useEffect(() => {
    if (paramSearchTerm) {
      setSearchTerm(paramSearchTerm);
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

  return <VideoList videoList={videos || []} />;
};

export default Feed;
