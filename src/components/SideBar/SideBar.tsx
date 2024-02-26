import React from "react";
import { Stack } from "@mui/material";
import {
  HomeIcon,
  HomeFilledIcon,
  SubscriptionsIcon,
  SubscriptionsFilledIcon,
  CollectionsIcon,
  CollectionsFilledIcon,
  HistoryIcon,
  HistoryFilledIcon,
  NotificationsIcon,
  NotificationsFilledIcon,
} from "./icons";

interface Category {
  name: string;
  iconType1: JSX.Element;
  iconType2: JSX.Element;
}

const categories: Category[] = [
  {
    name: "首页",
    iconType1: <HomeFilledIcon fill="#000" width={24} height={24} />,
    iconType2: <HomeIcon fill="#000" width={24} height={24} />,
  },
  {
    name: "关注",
    iconType1: <SubscriptionsFilledIcon width={24} height={24} />,
    iconType2: <SubscriptionsIcon width={24} height={24} />,
  },
  {
    name: "收藏",
    iconType1: <CollectionsFilledIcon fill="#000" width={24} height={24} />,
    iconType2: <CollectionsIcon fill="#000" width={24} height={24} />,
  },
  {
    name: "历史",
    iconType1: <HistoryFilledIcon fill="#000" width={24} height={24} />,
    iconType2: <HistoryIcon fill="#000" width={24} height={24} />,
  },
  {
    name: "通知",
    iconType1: <NotificationsFilledIcon fill="#000" width={24} height={24} />,
    iconType2: <NotificationsIcon fill="#000" width={24} height={24} />,
  },
  // 其他类别...
];

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  handleCategoryChange: (category: string) => void; // 添加 handleCategoryChange 属性
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => (
  <Stack
    direction="row"
    sx={{ overflowY: "auto", height: "auto", flexDirection: { md: "column" } }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          display: "flex",
          alignItems: "center", // 垂直居中对齐
          background:
            category.name === selectedCategory ? "#D9D9D9" : undefined,
          color: "#000",
        }}
        key={category.name}
      >
        <span style={{ marginLeft: "10px", marginRight: "24px" }}>
          {selectedCategory === category.name
            ? category.iconType1
            : category.iconType2}
        </span>
        <span style={{ opacity: 1 }}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
