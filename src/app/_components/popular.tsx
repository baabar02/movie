"use client";

import { Movies } from "./movies";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getPopularApi } from "../hooks/get-popular-api";
import Link from "next/link";
import { Movie } from "@/types";

// type PopularProps = {
//   movieId: string;
// };

const Popular = () => {
  const [popular, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    const popularPlay = async () => {
      const response = await getPopularApi();
      const firstTen = response?.results.splice(0, 10);
      setPopular(firstTen);
    };
    popularPlay();
  }, []);

  return (
    <div className="w-full max-w-screen-xl  sm:px-6 lg:px-8 py-6  gap-[10px] px-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Popular
        </h1>
        <Link
          href={`/popular`}
          className="flex items-center gap-1 text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer "
        >
          See more <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
        {popular.map((el, index) => {
          return (
            <Link key={index} href={`/details/${el.id}`}>
              <Movies
                title={el.original_title}
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

export default Popular;
