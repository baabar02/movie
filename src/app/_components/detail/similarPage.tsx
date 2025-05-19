
"use client";

import { useEffect, useState } from "react";
import { getSimilarApi } from "@/app/hooks/get-similar-api";
import { MovieDetails } from "@/types";
import { Movies } from "@/app/_components/movies";
import Link from "next/link";
import { useParams } from "next/navigation";

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

type PageProps = {
  params: {
    id: string;
  };
};

const SimilarMoviesPage = ({}:PageProps) => {
  const [similar, setSimilar] = useState<MovieDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSimilarApi();
        setSimilar(response.results || []);
      } catch (error) {
        console.error("Failed to fetch similar movies", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
       <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">All Similar Movies</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : similar.length === 0 ? (
        <p>No similar movies found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
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
      )}
    </div>
    </div>
  )
}


export default SimilarMoviesPage;
