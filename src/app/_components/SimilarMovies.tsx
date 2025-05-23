"use client";

import { Movies } from "./movies";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MovieDetails } from "@/types";
import { getSimilarApi } from "../hooks/get-similar-api";

type SimilarMoviesProps = {
  movieId: string;
};

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

const SimilarMovies = ({ movieId }: SimilarMoviesProps) => {
  console.log("movieId avsan uu? SimilarMovies:", movieId);
  const [similar, setSimilar] = useState<MovieDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sliceCount, setSliceCount] = useState(2);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      setIsLoading(true);
      try {
        const response = await getSimilarApi(movieId);
        console.log("Fetch:", response.results);
        const firstFive = response?.results.slice(0, 5);
        setSimilar(firstFive || []);
      } catch (error) {
        console.error("Error:", error);
        setSimilar([]);
      } finally {
        setIsLoading(false);
      }
    };
    //   if(window.innerWidth >= 640) {
    //     setSliceCount(5)
    //   } else {
    //     setSliceCount(2)
    //   }
    // }

    fetchSimilarMovies();
  }, []);

  if (isLoading) {
    return <div className="text-center py-6">Loading similar movies...</div>;
  }

  if (similar.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500">
        No similar movies found.
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-xl gap-2 px-4 sm:px-4 lg:px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          More like this
        </h1>
        <div className="text-center content-between mt-6">
          <Link
            href={`/similar/${movieId}`}
            className="text-blue-500 hover:underline font-medium"
          >
            See All Similar Movies →
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
        {similar.map((el) => (
          <Link key={el.id} href={`/details/${el.id}`}>
            <Movies
              title={el.title}
              vote={el.vote_average}
              image={
                el.backdrop_path
                  ? `${TMDB_IMAGE_SERVICE_URL}${el.backdrop_path}`
                  : "/placeholder.jpg"
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;

// 1. / app/page.tsx
// 2. upcoming - /upcoming/page.tsx
