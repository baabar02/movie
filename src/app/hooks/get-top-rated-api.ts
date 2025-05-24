import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface TMDBResponse {
  page: number;
  results: Array<{
    id: number;
    original_title: string;
    poster_path: string | null;
    backdrop_path: string | null;
    vote_average: number;
  }>;
  total_pages: number;
  total_results: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1 } = req.query;

  try {
    const response = await axios.get<TMDBResponse>(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch top-rated movies" });
  }
}