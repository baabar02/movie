// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,

  
// } from "@/components/ui/dialog"
// import Image from "next/image";
// import { Movie } from "@/types";
// import { Movies } from "../movies";
// import { Search, Star } from "lucide-react";
// import Link from "next/link";
// import { Dispatch, SetStateAction } from "react";

// type SearchDialogProps = {
//   movies: Movie[];
//   movieId: string;
//   searchQuery: string;
//   onSearch:()=>void;
//   setSearchQuery: Dispatch<SetStateAction<string>>;
// };
// const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

// export function SearchDialog({
//   movieId,
//   movies,
//   searchQuery,
//   onSearch,
//   setSearchQuery,
// }: SearchDialogProps) {
//   return (
//     <Dialog open={searchQuery != ""} onOpenChange={() => setSearchQuery("")}>
//        <DialogContent className="sm:max-w-[425px] fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-[425px] bg-background p-4 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
    
//         {Array.isArray(movies) &&
//   movies.slice(0, 3).map((movie) => (
//     <div key={movie.id} className="flex w-[311px] h-[116px] border border-green-400 mb-2">
//       <Link href={`/details/${movie.id}`} className="flex">
//         <Image
//           src={
//             movie.poster_path
//               ? `${TMDB_IMAGE_SERVICE_URL}${movie.poster_path}`
//               : "/placeholder.jpg"
//           }
//           width={67}
//           height={100}
//           alt={`${movie.title} backdrop`}
//           className="rounded-lg h-[100px] w-[67px] object-cover"
//         />
//         <div className="flex flex-col ml-[10px]">
//           <p className="text-xl font-bold overflow-hidden">{movie.title}</p>
//           <div className="flex gap-2 text-xs">
//             <Star className="w-[16px] fill-yellow-400 text-yellow-400" />
//             <p>{movie.vote_average.toFixed(1)}/10</p>
//           </div>
//           <p>{movie.release_date?.split("-")[0]}</p>
//         </div>
//       </Link>
//     </div>
// ))}

//   <h2 className="text-lg font-semibold mb-4">Search Results</h2>
//   {Array.isArray(movies) && movies.slice(0, 3).map((movie) => (
//     <div key={movie.id} className="flex w-[311px] h-[116px] border border-green-400 mb-2">
//       <Link href={`/details/${movie.id}`} className="flex">
//         <Image
//           src={movie.poster_path ? `${TMDB_IMAGE_SERVICE_URL}${movie.poster_path}` : "/placeholder.jpg"}
//           width={67}
//           height={100}
//           alt={`${movie.title} poster`}
//           className="rounded-lg h-[100px] w-[67px] object-cover"
//         />
//         <div className="flex flex-col ml-[10px]">
//           <p className="text-xl font-bold overflow-hidden">{movie.title}</p>
//           <div className="flex gap-2 text-xs">
//             <Star className="w-[16px] fill-yellow-400 text-yellow-400" />
//             <p>{movie.vote_average.toFixed(1)}/10</p>
//           </div>
//           <p>{movie.release_date.split("-")[0]}</p>
//         </div>
//       </Link>
//     </div>
//   ))}

//         <DialogFooter>
//           <Link href={`/search/${movieId}`}>
//             <p>See all results</p>
//           </Link>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

'use client';

import { Movie } from '@/types';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Star } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original"

type SearchDialogProps = {
  movies: Movie[];
  movieId: string;
  searchQuery: string;
  onSearch:()=>void;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};


export default function SearchDialog({ movies, movieId, searchQuery, onSearch, setSearchQuery }:  SearchDialogProps) {


  return (
    <Dialog.Root open={searchQuery.length >=3 } onOpenChange={()=> setSearchQuery("")}>
      <Dialog.Trigger className="search-trigger-class">
        🔍
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content
          className="z-[999] sm:max-w-[425px] fixed top-16 left-1/2 -translate-x-1/2 w-full max-w-[425px] bg-background p-4 rounded-md shadow-lg z-50"
        >
          <Dialog.Title className="text-lg font-bold mb-2">Search Results</Dialog.Title>
<div className="bg-red-200 p-2">
  DEBUG: where is fucking my movies?
</div>

          {Array.isArray(movies) && movies.slice(0, 3).map((movie) => (

            
            <div key={movie.id} className="flex w-[311px] h-[116px] border border-green-400 mb-2">
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
                  className="hidden sm:flex rounded-lg h-[100px] w-[67px] object-cover"
                />
                <div className="flex flex-col ml-[10px]">
                  <p className="text-xl font-bold overflow-hidden">{movie.title}</p>
                  <div className="flex gap-2 text-xs">
                    <Star className="w-[16px] fill-yellow-400 text-yellow-400" />
                    <p>{movie.vote_average.toFixed(1)}/10</p>
                  </div>
                  <p>{movie.release_date?.split('-')[0]}</p>
                </div>
              </Link>
            </div>
          ))}

          <Link href={`/search/${movieId}`}>
            <p className="text-blue-500 mt-2 hover:underline">See all results</p>
          </Link>

          <Dialog.Close asChild>
            <button
              className="absolute top-2 right-2 rounded-full p-1 hover:bg-gray-200"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
