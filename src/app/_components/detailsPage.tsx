// import { getMovieId } from "../hooks/get-id-api";



// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// const Detail = async ({id} :{id:string}) => {

//   const results = await getMovieId(id);

//   return (
//     <div>
     
//         <div>
//           hello {id}
//           <p>fsds</p>
//         </div>
   
//     </div>
//   );
// };

// export default Detail;

import Image from "next/image";

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original/";

type MovieDetails = {
  id: string;
  poster_path: string | null;
  original_title: string;
  vote_average: number | string;
  overview: string;
  release_date: string;
  // Add other fields as needed (e.g., genres, runtime)
};

interface DetailProps {
  movie: MovieDetails;
}

export const Detail = ({ movie }: DetailProps) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-[300px]">
          <Image
            src={
              movie.poster_path
                ? TMDB_IMAGE_SERVICE_URL + movie.poster_path
                : "/placeholder.jpg"
            }
            width={300}
            height={450}
            alt={movie.original_title}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            {movie.original_title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
            Release Date: {movie.release_date || "N/A"}
          </p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            {typeof movie.vote_average === "number" ? movie.vote_average.toFixed(1) : "N/A"}
          </p>
          <p className="text-base sm:text-lg text-gray-900 dark:text-gray-200 mt-4">
            {movie.overview || "No overview available."}
          </p>
        </div>
      </div>
    </div>
  );
};