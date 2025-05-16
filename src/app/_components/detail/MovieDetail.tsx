"use client";

import { getMovieId } from "@/app/hooks/get-id-api";
import { MovieDetails } from "@/types";
import { useEffect, useState } from "react";
import { TMDB_IMAGE_SERVICE_URL } from "../NowPlaying";
import Upcoming from "../Upcoming";
import { Star } from "lucide-react";

type MovieDetailProps = {
  movieId: string;
};

export const MovieDetail = ({ movieId }: MovieDetailProps) => {
  const [movie, setMovie] = useState<MovieDetails>();

  useEffect(() => {
    const getMovie = async () => {
      const response = await getMovieId(movieId);
      setMovie(response);
    };

    getMovie();
  }, []);

  const formattedDate = new Date(
    movie?.release_date ?? ""
  ).toLocaleDateString();

  return (
    <div>
      <div className="flex w-full max-screen-xl px-8 justify-between">
        <div className=" flex w-full justify-between">
          {movie?.title}
          <p>Rating</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="">
          {formattedDate} .{movie?.origin_country} .{movie?.runtime + "min?"}
        </div>
        <div className="flex">
          <Star />
          {movie?.vote_average.toFixed(1)}
          {movie?.popularity}
        </div>
      </div>

      <h1>{movie?.overview}</h1>
      {/* <img
        width="100%"
        height={500}
        src={TMDB_IMAGE_SERVICE_URL + movie?.poster_path}
      /> */}
    </div>
  );
};
