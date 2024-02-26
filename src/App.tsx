import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import VideoDetail from "./components/Video/VideoDetail";
import Feed from "./components/Feed";
import Navbar from "./components/NavBar/NavBar";

const App: React.FC = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#FFF" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchTerm" element={<Feed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
