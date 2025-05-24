import { Movies } from "./movies";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getTopRatedApi } from "../hooks/get-toprated-api";
import Link from "next/link";
import { Movie, MovieDetails } from "@/types";
import { parseAsInteger, useQueryState } from "nuqs";

type UpcomingMovies = {
  id: string;
  poster_path: string;
  original_title: string;
  vote_average: number | string;
  backdrop_path: string;
};

const TopRated = () => {
  const [toprated, setTopRated] = useState<UpcomingMovies[]>([]);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const topPlay = async () => {
      const movies = await getTopRatedApi(page);
      const firstTen = movies?.results.splice(0, 10);
    
      // setTopRated(firstTen);

        const tuhianGenreIinKinonuud = await getTopRatedApi(page);
      console.log(tuhianGenreIinKinonuud,"top");
      
      setTotalPage(tuhianGenreIinKinonuud.total_pages);
      setMovies(tuhianGenreIinKinonuud?.total_results);
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
