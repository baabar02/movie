"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MovieDetails } from "@/types";
import { getSimilarApi } from "@/app/hooks/get-similar-api";
import { Movies } from "@/app/_components/movies";
import { ChevronLeft } from "lucide-react";
import Footer from "../footer";

type SimilarMoviesProps = {
  movieId: string;
};

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

const SimilarFull = ({ movieId }: SimilarMoviesProps) => {
  const [similar, setSimilar] = useState<MovieDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [back, setBack] = useState();
  // setBack(prev=>({...prev, }))

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      setIsLoading(true);
      try {
        const response = await getSimilarApi(movieId);
        console.log("Fetch:", response.results);
        const firstFive = response?.results.slice();
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
    <div>
      <div className="w-full max-w-screen-xl gap-2 px-4 sm:px-4 lg:px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Similar movies
          </h1>
          <div className=" flex text-center content-between mt-6">
            <Link
              href={`/details/${movieId}`}
              className="text-blue-500 hover:underline font-medium"
            >
              <ChevronLeft /> Back
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
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
      <Footer />
    </div>
  );
};

export default SimilarFull;
