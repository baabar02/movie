"use client";

import { useEffect, useState } from "react";
import { getSearchApi } from "../hooks/get-search-api";
import Image from "next/image";

interface SearchProps {
  searchValue: string;
  page: string;
}

interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  genre_ids: number[];
}

export function SearchPage({ searchValue, page }: SearchProps) {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  useEffect(() => {
    const searchPlay = async () => {
      if (!searchValue) {
        setSearchResults([]);
        return;
      }

      const response = await getSearchApi(searchValue, page);
      setSearchResults(response.results || []);
      console.log(response, "search");
    };
    searchPlay();
  }, [searchValue, page]);

  return (
    <div className="p-4">
      <p>Search results</p>
      {searchResults.map((movie) => (
        <div className="border p-4 rounded flex gap-4" key={movie.id}>
          {movie.poster_path && (
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <div>
            <h3 className="text-base font-medium">{movie.title}</h3>
            <p className="text-sm text-gray-500">{movie.release_date}</p>
            <p className="text-sm text-gray-600 line-clamp-3">
              {movie.overview}
            </p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
