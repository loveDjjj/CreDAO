import React from "react";
import { Stack, IconButton, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {
  NavigationIcon,
  Logo,
  WalletIcon,
  CreatorIcon,
  AdvertisementsIcon,
  AvatarIcon,
} from "./icons";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{
      position: "sticky",
      background: "#FFF",
      top: 0,
      height: "10vh",
    }}
  >
    {/* 左侧区域 */}
    <Stack direction="row" alignItems="center">
      <IconButton sx={{ marginLeft: "14px", marginRight: "14px" }}>
        {/* 导航图标 */}
        <NavigationIcon fill="#000" width={24} height={24} />
      </IconButton>
      {/* Logo 和应用名称链接 */}
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <Logo width={24} height={24} />
        <span
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#2196F3",
            marginLeft: "5px",
          }}
        >
          CreDAO
        </span>
      </Link>
    </Stack>
    {/* 中间搜索栏区域 */}
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", alignItems: "center" }} // 设置为 center
      style={{ width: "100%" }} // 将样式应用到 SearchBar 的父元素
    >
      <SearchBar />
    </Stack>
    {/* 右侧图标区域 */}
    <Stack direction="row" alignItems="center" spacing={1.6} marginRight= "20px" >
      {/* 钱包图标 */}
      <IconButton sx={{ padding: 0 }}>
        <WalletIcon width={28} height={28} />
      </IconButton>
      {/* 创作者图标 */}
      <IconButton sx={{ padding: 0 }}>
        <CreatorIcon width={28} height={28} />
      </IconButton>
      {/* 广告图标 */}
      <IconButton sx={{ padding: 0 }}>
        <AdvertisementsIcon width={28} height={28} />
      </IconButton>
      {/* 用户头像图标 */}
      <IconButton sx={{ padding: 0}}>
        <Box
          component="span"
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "12px",
            backgroundColor: "#f2f2f2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AvatarIcon width={24} height={24} />
        </Box>
      </IconButton>
    </Stack>
  </Stack>
);

export default Navbar;
