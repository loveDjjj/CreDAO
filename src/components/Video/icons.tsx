import React from "react";

interface DetailIconProps {
  fill: string;
  width: number;
  height: number;
}

const DetailIcon: React.FC<DetailIconProps> = ({ fill, width, height }) => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    width={width}
    height={height}
  >
    <path d="M527.24 251.73c60.66 0 109.862-49.167 109.862-109.826s-49.202-109.826-109.862-109.826c-60.66 0-109.862 49.167-109.862 109.826 0.035 60.625 49.202 109.826 109.862 109.826zM527.24 727.614c-60.66 0-109.862 49.167-109.862 109.826s49.202 109.826 109.862 109.826c60.66 0 109.862-49.167 109.862-109.826s-49.202-109.826-109.862-109.826zM527.24 379.826c-60.66 0-109.862 49.167-109.862 109.826s49.202 109.826 109.862 109.826c60.66 0 109.862-49.167 109.862-109.826 0-60.66-49.202-109.826-109.862-109.826z" />
  </svg>
);

export default DetailIcon;
