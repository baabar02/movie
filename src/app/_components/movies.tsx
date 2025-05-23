

import Upcoming from "./upcoming";
import Image from "next/image";

type UpcomingMovies = {
  title: string;
  image: string;
  vote: string | number;
  releaseYear?:string
};

interface PageProps {
  params: {
    id: string;
  };
}

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original/";

export const Movies = ({ title, vote, image,releaseYear }: UpcomingMovies) => {
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
          {typeof vote === "number" ? vote.toFixed(1) : "null"}
        </h1>
        <h2 className=" dark:text-gray-200 text-xs sm:text-base lg:text-lg font-medium text-gray-900">
          {title}
        </h2>
      </div>
    </div>
  );
};