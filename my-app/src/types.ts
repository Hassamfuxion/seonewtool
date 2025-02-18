export interface RankResult {
  keyword: string;
  position: number;
  url: string;
  device: string;
  location: string;
  timestamp: Date;
}

export type DeviceType = 'desktop' | 'android' | 'iphone';

export interface SearchForm {
  url: string;
  keywords: string;
  location: string;
  device: DeviceType;
}