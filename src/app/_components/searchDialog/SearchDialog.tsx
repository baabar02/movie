import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import Image from "next/image";
import { Movie } from "@/types";
import { Movies } from "../movies";
import { Search, Star } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

type SearchDialogProps = {
  movies: Movie[];
  movieId: string;
  searchQuery: string;
  onSearch: () => void;
  setSearchedMovies: Dispatch<SetStateAction<Movie[]>>;
};
const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

export function SearchDialog({
  movieId,
  movies,
  searchQuery,
  onSearch,
  setSearchedMovies,
}: SearchDialogProps) {
  console.log(movies, "movies");

  return (
    <Dialog
      open={movies.length >= 1}
      onOpenChange={() => setSearchedMovies([])}
    >
      <DialogContent className="sm:max-w-[425px] absolute top-75 left-1/2 -translate-x-1/2 w-full max-w-[425px] bg-background p-4 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
        <DialogTitle></DialogTitle>
        {/* <h2 className="text-lg font-semibold mb-4">Search Results</h2> */}
        {movies?.slice(0, 3).map((movie) => (
          <div key={movie.id} className="flex w-[311px] h-[116px] mb-2">
            <Link href={`/details/${movie.id}`} className="flex">
              <Image
                src={
                  movie.poster_path
                    ? `${TMDB_IMAGE_SERVICE_URL}${movie.poster_path}`
                    : "/placeholder.jpg"
                }
                width={67}
                height={100}
                alt={`${movie.title} backdrop`}
                className="rounded-lg h-[100px] w-[67px] object-cover"
              />
              <div className="flex flex-col ml-[10px]">
                <p className="text-xl font-bold overflow-hidden line-clamp-2">
                  {movie.title}
                </p>
                <div className="flex gap-2 text-xs">
                  <Star className="w-[16px] fill-yellow-400 text-yellow-400" />
                  <p>{movie.vote_average.toFixed(1)}/10</p>
                </div>
                <p>{movie.release_date?.split("-")[0]}</p>
              </div>
            </Link>
          </div>
        ))}

        <DialogFooter>
          <Link href={`/search/${movieId}`}>
            <p>See all results</p>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
