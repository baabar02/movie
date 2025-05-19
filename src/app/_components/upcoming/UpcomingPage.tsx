// app/upcoming/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getUpcomingApi } from "@/app/hooks/get-upcoming-api";
import { Movies } from "@/app/_components/movies";

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

type UpcomingMovies = {
  id: string;
  poster_path: string;
  original_title: string;
  vote_average: number | string;
  backdrop_path: string;
};

const UpcomingFullPage = () => {
  const [movies, setMovies] = useState<UpcomingMovies[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUpcomingApi();
        setMovies(response.results || []);
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">All Upcoming Movies</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/details/${movie.id}`}>
              <Movies
                title={movie.original_title}
                vote={movie.vote_average}
                image={
                  movie.backdrop_path
                    ? `${TMDB_IMAGE_SERVICE_URL}${movie.backdrop_path}`
                    : "/placeholder.jpg"
                }
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingFullPage;
