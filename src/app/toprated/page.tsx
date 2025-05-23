"use client";

import { Movies } from "../_components/movies";
import { useEffect, useState } from "react";
import { getTopRatedApi } from "../hooks/get-toprated-api";
import Link from "next/link";
import { Movie, MovieDetails } from "@/types";
import Footer from "../_components/footer";
import { ChevronLeft } from "lucide-react";
import { useQueryState, parseAsInteger } from "nuqs";

const TopRatedPage = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const topPlay = async () => {
      const topratedmovies = await getTopRatedApi(page);

      setTotalPage(topratedmovies?.total_pages);
      setMovies(topratedmovies?.results);
    };
    topPlay();
  }, [page]);

  const handleNext = () => {
    if (page < totalPage) setPage(page + 1);
  };
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <div className="w-full max-w-screen-xl  sm:px-6 lg:px-8 py-6   gap-[10px] px-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Top Rated
          </h1>
          <Link
            href={`/`}
            className=" items-center gap-1 text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer flex"
          >
            back <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
          {movies?.map((el, index) => {
            console.log(el);
            return (
              <Link key={el.id} href={`/details/${el.id}`}>
                <Movies
                  title={el.original_title}
                  vote={el.vote_average}
                  image={el.backdrop_path}
                />
              </Link>
            );
          })}
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
      </div>
      <Footer />
    </div>
  );
};

export default TopRatedPage;
