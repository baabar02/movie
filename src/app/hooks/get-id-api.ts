import { MovieDetails } from "@/types";
import axios from "axios";

export const getMovieId = async (id: string) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8",
      },
    };

    const result = await axios.get<MovieDetails>(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      config
    );
    //  /movie/${movieId}?language=en-US

    return result?.data;
  } catch (error) {
  
  }
};
