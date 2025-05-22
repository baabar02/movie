"use client";

import { useEffect, useState } from "react";
import { getSearchApi } from "../hooks/get-search-api";
import Image from "next/image";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  genre_ids: number[];
}

interface SearchApiResponse {
  name: string;
}
const SearchComponent = ({ name }: SearchApiResponse) => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  useEffect(() => {
    const searchPlay = async () => {
      const response = await getSearchApi(name, "1");
      setSearchResults(response.results || []);
    };
    searchPlay();
  }, []);

  return (
    <div className="p-4">
      <Link href={`/`}>Search results</Link>
      {searchResults?.map((movie, index) => (
        <div key={index} className="border p-4 rounded flex gap-4">
          <Link href={`/details/${movie.id}`} aria-label={`${movie.id}`}>
            {movie.poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                width={100}
                height={100}
              />
            )}

            <div>
              <h3 className="text-base font-medium">{movie.title}</h3>
              <p className="text-sm text-gray-500">{movie.release_date}</p>
              <p className="text-sm text-gray-600 line-clamp-3">
                {movie.overview}
              </p>
            </div>
          </Link>
        </div>
      ))}
      ;
    </div>
  );
};
export default SearchComponent;
