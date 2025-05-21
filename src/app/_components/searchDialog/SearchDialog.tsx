import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Movie } from "@/types";
import { Movies } from "../movies";
import { Star } from "lucide-react";

type SearchDialogProps = {
  movies: Movie[];
  onSearch: () => void;
};
const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

export function SearchDialog({ onSearch, movies }: SearchDialogProps) {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline" onClick={onSearch}>
          Search
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] fixed top-60 left-1/2 transform -translate-x-1/2  max-w-[425px] bg-background p-4 rounded-lg shadow-lg max-h-[80vh]">
        {movies.slice(0,3).map((movie) => {
          return (
            <div className="flex w-[311px] h-[116px] border border-green-400">
              <Image
                src={
                    movie.poster_path
                      ? `${TMDB_IMAGE_SERVICE_URL}${movie.poster_path}`
                      : "/placeholder.jpg"
                  }
                  width={67}
                  height={100}
                  alt={`${movie.title} backdrop`}
                  className="hidden  sm:flex rounded-lg h-[100px] w-[67px] object-cover"
                />
                <div className="flex flex-col ml-[10px]">
                <p className="text-xl font-bold overflow-hidden"
                 key={movie.id}>{movie.title}</p>
                 <div className="flex gap-2 text-xs">
                    <Star className="w-[16px] fill-yellow-400 text-yellow-400"/>
                    <p>{movie.vote_average.toFixed(1)}{"/10"}</p>
                 </div>
                 <p>{movie.release_date.split("-")[0]}</p>
              
                </div>
              
            </div>
                  
          )
        })}
        <DialogFooter>
          <p>See all results</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


// import { useDebounce } from "use-debounce";

// const [debouncedQuery] = useDebounce(searchQuery, 300);
// useEffect(() => {
//   const onSearchMovies = async () => {
//     if (debouncedQuery.trim() === "") {
//       setSearchedMovies([]);
//       return;
//     }
//     try {
//       const movies = await getSearchApi(debouncedQuery, searchPage.toString());
//       setSearchedMovies(movies.results || movies);
//       setTotalSearchPages(movies.total_pages || 1);
//     } catch (error) {
//       console.error("Error searching movies:", error);
//     }
//   };
//   onSearchMovies();
// }, [debouncedQuery, searchPage]);