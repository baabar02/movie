"use client";

import { Badge, ChevronRight, Import, Star } from "lucide-react";
import { useEffect, useState } from "react";

import Link from "next/link";
import { Movie, MovieDetails } from "@/types";
import { getGenreApi } from "@/app/hooks/get-genre-api";

import { getDiscoverApi } from "../hooks/get-discover-api";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import { Movies } from "./movies";
import Footer from "./footer";
import { parseAsInteger, useQueryState } from "nuqs";

type GenreProps = {
  genreName: string;
};

export interface Genre {
  id: number;
  name: string;
}

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

export const GenrePageComponent = ({ genreName }: GenreProps) => {
  const [showGenre, setShowGenre] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const genrePlay = async () => {
      const response = await getGenreApi();
      setShowGenre(response.genres);

      const findId = response.genres.find(
        (item: Genre) => item.name.toLowerCase() === genreName
      );

      const tuhianGenreIinKinonuud = await getDiscoverApi(findId.id, page);
      setTotalPage(tuhianGenreIinKinonuud.total_pages);
      setMovies(tuhianGenreIinKinonuud.results);
    };
    genrePlay();
  }, [page]);

  const handleNext = () => {
    if (page < totalPage) setPage(page + 1);
  };
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  console.log(showGenre, "showGenre");

  return (
    <div className="w-full max-w-screen-xl mx-auto items-center sm:px-6 lg:px-8 py-6 gap-[10px] px-5">
      <div></div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Search by genre
        </h1>
        <Link
          href={`/genre`}
          className="flex items-center gap-1 text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer "
        >
          Back <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="flex">
        <div className="">
          <div className=" sm:w-[387px] grid sm:grid grid-cols-3 sm:grid-cols-3 gap-5 justify-items-center">
            {showGenre.map((el) =>
              el.name ? (
                <Link href={`/genre/${el.name.toLowerCase()}`} key={el.id}>
                  <span className="gap-10 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 text-foreground hover:bg-gray-500 dark:hover:bg-gray-800 px-2 py-1 text-xs sm:text-sm cursor-pointer">
                    {el.name}
                  </span>
                </Link>
              ) : null
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          {movies?.map((el) => (
            <div
              key={el.id}
              className="w-[165px] h-[331px] object-cover overflow-hidden rounded-md"
            >
              <Link href={`/details/${el.id}`} aria-label={` ${el.title}`}>
                <Image
                  src={
                    el.backdrop_path
                      ? `${TMDB_IMAGE_SERVICE_URL}${el.backdrop_path}`
                      : "/placeholder.jpg"
                  }
                  width={165}
                  height={331}
                  alt={`${el.title} backdrop`}
                  className="hidden  sm:flex rounded-lg h-[224px] w-[165px] object-cover"
                />
                <div className="flex">
                  <Star className="text-yellow-400 fill-yellow-400" />
                  <p>
                    {el.vote_average.toFixed(1)}
                    {"/10"}
                  </p>
                </div>
                <p>{el.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrevious}
          className={`px-4 py-2 rounded-md ${
            page === 1
              ? "bg-gray-300 text-gray-500"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <span className="self-center">
          Page {page} of {totalPage}
        </span>
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded-md ${
            page === totalPage
              ? "bg-gray-300 text-gray-500"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};
