export interface Home$Api {
  notices: Home$Api$Notices;
  recentInvestmentContents: Home$Api$RecentInvestmentContents;
  videos: Home$Api$Videos;
  realtimeComments: Home$Api$RealtimeComments;
  mainNews: Home$Api$MainNews;
  mostReadNews: Home$Api$MostReadNews;
  todayMarketNews: Home$Api$TodayMarketNews;
  mainIndicator: Home$Api$MainIndicators;
  categoryNews: Home$Api$CategoryNews;
}

export interface Home$Api$Notices {
  performanceSummaryNotices: Home$Api$Notices$PerformanceSummaryNotice[];
  investmentContentsNotices: Home$Api$Notices$InvestmentContentsNotice[];
}

export interface Home$Api$Notices$PerformanceSummaryNotice {
  stockCode: string;
  stockName: string;
  title: string;
  disclosureDateTime: string;
}

export interface Home$Api$Notices$InvestmentContentsNotice {
  postId: number;
  title: string;
  writeDateTime: string;
}

export interface Home$Api$RecentInvestmentContents {
  all: Home$Api$RecentInvestmentContents$Content[];
  domesticStock: Home$Api$RecentInvestmentContents$Content[];
  overseasStock: Home$Api$RecentInvestmentContents$Content[];
  coin: Home$Api$RecentInvestmentContents$Content[];
  alternativeInvestment: Home$Api$RecentInvestmentContents$Content[];
  investmentTrend: Home$Api$RecentInvestmentContents$Content[];
}

export interface Home$Api$RecentInvestmentContents$Content {
  postId: number;
  title: string;
  subCategory: string;
  writeDateTime: string;
  authorId: number;
  authorName: string;
  leadText: string;
  authorThumbnailUrl: string;
  isOriginal: boolean;
}

export interface Home$Api$Videos {
  invenId: string;
  items: Home$Api$Videos$Video[];
}

export interface Home$Api$Videos$Video {
  id: string;
  cpCode: string;
  cpName: string;
  title: string;
  body: string;
  sectionCode: string;
  categoryCode: string;
  episode: number;
  playTime: number;
  targetNation: string;
  targetAge: number;
  vodImage: string;
  publishDateTime: string;
  updateDateTime: string;
  createDateTime: string;
  enabled: boolean;
}

export interface Home$Api$RealtimeComments {
  items: Home$Api$RealtimeComments$Comment[];
}

export interface Home$Api$RealtimeComments$Comment {
  key: string;
  stockCode: string;
  channelName: string;
  title: string;
  content: string;
  createDateTime: string;
  stockIcon: string;
  stockName: string;
}

export interface Home$Api$MainNews {
  templatedNews: Home$Api$MainNews$TemplatedNewses;
  subNewsItems: Home$Api$MainNews$News[];
  templateCategories: string[];
  subCategories: string[];
}

export interface Home$Api$MainNews$TemplatedNewses {
  templates: string[];
  items: Home$Api$MainNews$News[];
}

export interface Home$Api$MainNews$News {
  id: string;
  thumbnail: string;
  title: string;
  leadText: string;
  registerDateTime: string;
  mediaName: string;
  landingUrl: string;
  category: string;
  subCategory: string;
}

export interface Home$Api$MostReadNews {
  items: Home$Api$Side$News[];
}

export interface Home$Api$Side$News {
  id: string;
  title: string;
  landingUrl: string;
  thumbnail?: string;
  category: string;
  subCategory: string;
  mediaThumbnail?: string | null;
  mediaName?: string | null;
  registerDateTime?: string | null;
}

export interface Home$Api$TodayMarketNews {
  items: Home$Api$Side$News[];
}

export interface Home$Api$MainIndicators {
  items: Home$Api$MainIndicators$Indicator[];
}

export interface Home$Api$MainIndicators$Indicator {
  id: string;
  category: string;
  name: string;
  currentPrice: number;
  priceChange: number;
  rateOfChange: number;
  unit: string;
}

export interface Home$Api$CategoryNews {
  all: Home$CategoryNews$News[];
  domestic: Home$CategoryNews$News[];
  overseas: Home$CategoryNews$News[];
  market: Home$CategoryNews$News[];
  coin: Home$CategoryNews$News[];
  esg: Home$CategoryNews$News[];
}

export interface Home$CategoryNews$News {
  id: string;
  thumbnail: string;
  title: string;
  leadText: string;
  registerDateTime: string;
  mediaName: string;
  landingUrl: string;
  category: string;
  subCategory: string;
}
