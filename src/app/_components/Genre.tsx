"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import Link from "next/link";
import { Movie, MovieDetails } from "@/types";
import { getGenreApi } from "@/app/hooks/get-genre-api";
import { promises } from "dns";
import { Movies } from "./movies";
import { getDiscoverApi } from "../hooks/get-discover-api";

type GenreProps = {
  genreName: string;
};

export interface Genre {
  id: number;
  name: string;
}

export const GenrePageComponent = ({ genreName }: GenreProps) => {
  const [showGenre, setShowGenre] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const genrePlay = async () => {
      try {
        const response = await getGenreApi();
        setShowGenre(response.genres);

        const findId = response.genres.find(
          (item: Genre) => item.name.toLowerCase() === genreName
        );

        const tuhianGenreIinKinonuud = await getDiscoverApi(findId.id, "1");
        setMovies(tuhianGenreIinKinonuud);
      } catch (err) {}
    };
    genrePlay();
  }, []);

  console.log(showGenre, "showGenre");

  return (
    <div className="w-full max-w-screen-xl  sm:px-6 lg:px-8 py-6  gap-[10px] px-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Genre
        </h1>
        <Link
          href={`/genre`}
          className="flex items-center gap-1 text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer "
        >
          See more <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
        {showGenre?.map((el, index) => {
          return <div key={index}>{el.name}</div>;
        })}
      </div>

      <div className="grid grid-cols-4">
        {movies?.map((el, index) => {
          return (
            <Link key={index} href={`/details${el.id}`}>
              <Movies
                title={el.title}
                vote={el.vote_average}
                image={el.backdrop_path}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
