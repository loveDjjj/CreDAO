export interface VideoTypes {
  id: {
    videoId: string; // 视频的唯一标识符
  };
  snippet: {
    publishedAt: string; // 视频发布时间
    channelId: string; // 频道的唯一标识符
    channelTitle: string; // 频道名称
    title: string; // 视频标题
    description: string; // 视频描述
    thumbnails: {
      default: {
        url: string; // 默认封面缩略图 URL
        width: number; // 默认封面缩略图宽度
        height: number; // 默认封面缩略图高度
      };
      medium: {
        url: string; // 中等封面缩略图 URL
        width: number; // 中等封面缩略图宽度
        height: number; // 中等封面缩略图高度
      };
      high: {
        url: string; // 高清封面缩略图 URL
        width: number; // 高清封面缩略图宽度
        height: number; // 高清封面缩略图高度
      };
    };
    categoryId: string; // 视频分类的唯一标识符
    tags: string[]; // 视频标签
    liveBroadcastContent: "none" | "upcoming" | "live"; // 直播内容状态，可选值有 "none", "upcoming", "live"
    defaultLanguage: string; // 视频默认语言
    localized: {
      title: string; // 本地化的视频标题
      description: string; // 本地化的视频描述
    };
    statistics?: {
      duration?: string; // 视频时长
      viewCount?: number; // 视频观看次数
      likeCount?: number; // 视频点赞次数
      dislikeCount?: number; // 视频不喜欢次数
      commentCount?: number; // 视频评论次数
      favoriteCount?: number; // 视频收藏次数
    };
    regionRestriction?: {
      allowed?: string[]; // 允许观看的地区列表
      blocked?: string[]; // 禁止观看的地区列表
    };
    topicDetails?: {
      topicIds?: string[]; // 视频的话题标识符列表
      relevantTopicIds?: string[]; // 相关的话题标识符列表
    };
    recordingDetails?: {
      location?: {
        // 视频拍摄地点的经纬度坐标
        latitude: number;
        longitude: number;
      };
      recordingDate?: string; // 视频录制日期
      locationDescription?: string; // 视频拍摄地点的描述
    };
    contentDetails?: {
      dimension?: "2d" | "3d" | "360"; // 视频维度，可选值有 "2d", "3d", "360"
      definition?: "hd" | "sd"; // 视频清晰度，可选值有 "hd", "sd"
      caption?: boolean; // 视频是否有字幕
      licensedContent?: boolean; // 视频是否有授权内容
      projection?: "rectangular" | "360"; // 视频投影方式，可选值有 "rectangular", "360"
    };
    status?: {
      uploadStatus?: "processed" | "uploaded" | "rejected"; // 视频上传状态，可选值有 "processed", "uploaded", "rejected"
      privacyStatus?: "public" | "private" | "unlisted"; // 视频隐私状态，可选值有 "public", "private", "unlisted"
      embeddable?: boolean; // 视频是否可嵌入
      publicStatsViewable?: boolean; // 是否允许公开查看统计信息
    };
    player?: {
      embedHtml: string; // 视频的嵌入式播放器 HTML 代码
      embedHeight?: number; // 视频嵌入式播放器的高度
      embedWidth?: number; // 视频嵌入式播放器的宽度
    };
    topicCategories?: string[]; // 视频的话题分类列表
    localizations?: {
      // 本地化信息
      [key: string]: {
        title: string; // 本地化的视频标题
        description: string; // 本地化的视频描述
      };
    };
  };
}
