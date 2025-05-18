
"use client";

import { getMovieId } from "@/app/hooks/get-id-api";
import { MovieDetails } from "@/types";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Video } from "../video";
import Image from "next/image";
import SimilarMovies from "../SimilarMovies";
import Footer from "../footer";

type MovieDetailProps = {
  movieId: string;
};

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

const formatRuntime = (minutes: number | null) => {
  if (!minutes || minutes <= 0) return "N/A";
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (hours === 0) return `${remainingMinutes}min`;
  return `${hours}h ${remainingMinutes}min`;
};

export const MovieDetail = ({ movieId }: MovieDetailProps) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getMovieId(movieId);
        setMovie(response);
        console.log("Movie Data:", response);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setMovie(null); 
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const formattedDate = new Date(movie.release_date ?? "").toLocaleDateString();

  return (
    <div className="flex flex-col gap-5 max-w-screen-xl mx-auto  justify-between">
    <div className="flex flex-col gap-5 max-w-screen-xl mx-auto px-25 justify-between">
      <div className="flex mt-10 justify-between">
        <p className="text-2xl font-bold">{movie.title}</p>
        <p>Rating</p>
      </div>
      <div className="flex justify-between">
        <div>
          {formattedDate} • {movie.origin_country?.join(", ") || "N/A"} •{" "}
          {formatRuntime(movie.runtime)}
        </div>
        <div className="flex-col">
          <div className="flex gap-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            {movie.vote_average.toFixed(1)}
            {"/10"}
          </div>
          <div className="flex-end">{Math.floor(movie.popularity)}{"k"}</div>
        </div>
      </div>
      <div className="relative flex gap-10 justify-between">
        <Image
          src={
            movie.backdrop_path
              ? `${TMDB_IMAGE_SERVICE_URL}${movie.backdrop_path}`
              : "/placeholder.jpg"
          }
          width={290}
          height={428}
          alt={`${movie.title} backdrop`}

          className="rounded-lg h-[428px] w-[290px] object-cover"
        />
      
        <Image
          src={
            movie.poster_path
              ? `${TMDB_IMAGE_SERVICE_URL}${movie.poster_path}`
              : "/placeholder.jpg"
          }
          width={760}
          height={428}
          alt={`${movie.title} poster`}
          className=" rounded-lg h-[428px] w-[760px] object-cover"
          
        />
          <Video  movieId={movieId}/>
      </div>
      {movie.genres && (
        <div className="flex gap-2">
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm"
            >
              {genre.name}
            </span>
          ))}
        </div>
      )}
      <h1>{movie.overview}</h1>
      <SimilarMovies movieId={movieId} />
    
    </div>
    <Footer/>
</div>
  );
};