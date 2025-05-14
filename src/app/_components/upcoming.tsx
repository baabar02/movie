"use client";

import { Badge } from "@/components/ui/badge";
import { Movies } from "./movies";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { getUpcomingApi } from "../hooks/get-upcoming-api";

// https://api.themoviedb.org/3/
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8
// https://image.tmdb.org/t/p

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p";

type UpcomingMovies = {
  poster_path: string;
  original_title: string;
  vote_average: number;
  backdrop_path: string;
};
const Upcoming = () => {
  const [upComing, setUpcoming] = useState<UpcomingMovies[]>([]);

  useEffect(() => {
    const upPlay = async () => {
      const response = await getUpcomingApi();
      const firstTen = response?.results.splice(0, 10);
      setUpcoming(firstTen);
    };
    upPlay();
  }, []);

  return (
    <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 border border-green-400  gap-[10px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Upcoming
        </h1>
        <p className=" items-center gap-1 text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer flex">
          See more <ChevronRight className="w-4 h-4" />
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
        {upComing.map((el, index) => {
          return (
            <div key={index} className="">
              <Movies
                title={el.original_title}
                image={el.backdrop_path}
                vote={el.vote_average}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Upcoming;
