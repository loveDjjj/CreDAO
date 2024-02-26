import axios from "axios";

const API_KEY = "YOUR_API_KEY";

export const searchVideos = async (query: string) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}`,
    );
    return response.data.items;
  } catch (error) {
    console.error("Error searching videos:", error);
    return [];
  }
};

export const fetchVideoInfo = async (videoId: string) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`,
    );
    return response.data.items[0];
  } catch (error) {
    console.error("Error fetching video info:", error);
    return null;
  }
};

export const fetchChannelInfo = async (channelId: string) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`,
    );
    return response.data.items[0].snippet;
  } catch (error) {
    console.error("Error fetching channel info:", error);
    return null;
  }
};
