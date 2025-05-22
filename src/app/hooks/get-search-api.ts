import axios from "axios";

interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  genre_ids: number[];
}
interface SearchApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
  searchValue: string;
}

export const getSearchApi = async (searchValue: string, page: string) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8",
    },
  };

  const result = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
    config
  );

  return result?.data;
};
