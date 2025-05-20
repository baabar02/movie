import { Movies } from "./movies";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getTopRated } from "../hooks/get-toprated-api";
import Link from "next/link";
import { Movie } from "@/types";

const TopRated = () => {
  const [toprated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    const topPlay = async () => {
      const movies = await getTopRated();
      const firstTen = movies?.splice(0, 10);
      setTopRated(firstTen);
    };
    topPlay();
  }, []);

  return (
    <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6   gap-[10px] ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Top Rated
        </h1>
        <Link
          href={`/toprated`}
          className="flex items-center gap-1 text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer "
        >
          See more <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
        {toprated.map((el, index) => {
          console.log(el);
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

export default TopRated;
