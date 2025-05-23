"use client";

import { Badge } from "@/components/ui/badge";
import { Movies } from "../_components/movies";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getUpcomingApi } from "../hooks/get-upcoming-api";
import Footer from "../_components/footer";
import { parseAsInteger, useQueryState } from "nuqs";
import { MovieDetails } from "@/types";

type UpcomingMovies = {
  id: string;
  poster_path: string;
  original_title: string;
  vote_average: number | string;
  backdrop_path: string;
};

const UpcomingPage = () => {
  const [upComing, setUpcoming] = useState<UpcomingMovies[]>([]);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const upPlay = async () => {
      const response = await getUpcomingApi();
      const firstTen = response?.results.splice(0, 20);
      setUpcoming(firstTen);

      const tuhianGenreIinKinonuud = await getUpcomingApi();
      setTotalPage(tuhianGenreIinKinonuud.total_pages);
      setMovies(tuhianGenreIinKinonuud.results);
    };
    upPlay();
  }, [page]);

  const handleLogoClick = () => {
    // router.push("/upcoming");
  };

  const handleNext = () => {
    if (page < totalPage) setPage(page + 1);
  };
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6  gap-[10px]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Upcoming movies
          </h1>
          <Link
            href={`/`}
            className=" items-center gap-1 text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer flex"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
          {upComing.map((el, index) => {
            return (
              <Link key={index} href={`/details/${el.id}`}>
                <div className="">
                  <Movies
                    title={el.original_title}
                    image={el.backdrop_path}
                    vote={el.vote_average}
                  />
                </div>
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

export default UpcomingPage;
