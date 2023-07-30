export interface AnimesResponseData {
  data: Anime[];
}

export interface AnimeResponseData {
  data: Anime;
}

export interface Anime {
  id: string;
  type: string;
  links: Links;
  attributes: AnimeAttributes;
  relationships: any;
}

export interface Links {
  self: string;
}

export interface AnimeAttributes {
  createdAt: string;
  synopsis: string;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  startDate: string;
  endDate: any;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  posterImage: PosterImage;
  coverImage: CoverImage;
  episodeCount: any;
  episodeLength: number;
  youtubeVideoId?: string;
  showType: string;
}

export interface PosterImage {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
}

export interface CoverImage {
  tiny: string;
  large: string;
  small: string;
  original: string;
}
