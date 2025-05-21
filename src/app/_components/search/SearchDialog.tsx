import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Movie } from "@/types";

type SearchDialogProps = {
  movies: Movie[];
  onSearch: () => void;
};

export function SearchDialog({ onSearch, movies }: SearchDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={onSearch}>
          Search
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {movies.map((movie) => {
          return <p key={movie.id}>{movie.title}</p>;
        })}
        <DialogFooter>
          <p>See all results for "Wicked"</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
