import { MovieDetail } from "@/app/_components/detail/MovieDetail";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credit: string;
  cast: string;
  crew: string;
};

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: OriginCountry[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  cast: string[];
  crew: string[];
}

export interface Genre {
  id: number;
  name: string;
}

export enum OriginCountry {
  Empty = "",
  GB = "GB",
  Us = "US",
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: OriginCountry;
}

export interface ProductionCountry {
  iso_3166_1: OriginCountry;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface CrewResponse {
  id: number;
  cast: { id: number; name: string; character: string };
  crew: { id: number; name: string; job: string };
}

interface VideoResponse {
  id: number;
  results: { id: string; key: string; name: string; type: string };
}



export interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}