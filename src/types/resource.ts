export interface Resource {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  upvotes: number;
  comments: number;
  saves: number;
  createdAt: string;
  isUpvoted?: boolean;
  isSaved?: boolean;
  type: 'tutorial' | 'github' | 'blog' | 'tool' | 'video';
}

export interface TrendingTag {
  name: string;
  count: number;
}

export interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  reason: string;
  url: string;
  type: 'tutorial' | 'github' | 'blog' | 'tool' | 'video';
}
