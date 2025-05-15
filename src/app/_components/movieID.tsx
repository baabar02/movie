import Upcoming from "./upcoming";
import Image from "next/image";

type UpcomingMovies = {
  title: string;
  image: string;
  vote:  string | number;
};

interface PageProps {
  params: {
    id: string;
  };
}

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original/";

export const Movies = ({ title, image, vote, }: UpcomingMovies) => {
  return (
    <div className="flex flex-col w-[158px] sm:w-[180px] md:w-[200px] h-[280px] lg:h-[340px] bg-gray-200 dark:bg-gray-800  rounded-[8px]">
      <div className="w-full h-[234px] sm:h-[234px] lg:h-[260px] rounded-t-[8px] bg-gray-300">
        <Image
          src={TMDB_IMAGE_SERVICE_URL + image}
          width={300}
          height={400}
          alt="poster"
          className="object-cover rounded-t-[8px] w-full h-full sm:h-[234px] lg:h-[260px]"
        />
      </div>
      <div className="flex flex-col p-2 sm:p-3 gap-1 ">
        <h1 className="text-sm sm:text-base lg:text-lg font-semibold text-gray">
          {typeof vote === "number" ? vote.toFixed(1) : "null" }
        </h1>
        <h2 className=" dark:text-gray-200 text-xs sm:text-base lg:text-lg font-medium text-gray-900">
          {title}
        </h2>
      </div>
    </div>
  );
};




// import { Badge } from "@/components/ui/badge";
// import { Movies } from "./movies";
// import { ChevronDown, ChevronRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import { getPopularApi } from "../hooks/get-popular-api";
// import { getTopRated } from "../hooks/get-toprated-api";

// type popularMovies = {
//   poster_path: string;
//   original_title: string;
//   vote_average: number | string;
//   backdrop_path: string;
// };
// interface PageProps {

//     params: {
        
//       id: string;
//     };
//   }
// const MovieId = ({}, id:PageProps) => {
//   const [toprated, setTopRated] = useState<popularMovies[]>([]);

//   useEffect(() => {
//     const topPlay = async () => {
//       const response = await getTopRated();
//       const firstTen = response?.results.splice(0, 10);
//       setTopRated(firstTen);
//     };
//     topPlay();
//   }, []);

//   return (
//     <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6   gap-[10px] px-5">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
//           Top Rated
//         </h1>
//         <p className="flex items-center gap-1 text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer flex">
//           See more <ChevronRight className="w-4 h-4" />
//         </p>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
//         {toprated.map((el, index) => {
//           return (
//             <div key={index} className="">
//               <Movies
//                 title={el.original_title}
//                 vote={el.vote_average}
//                 image={el.backdrop_path}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MovieId;
