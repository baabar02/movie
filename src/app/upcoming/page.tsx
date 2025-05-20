"use client";

import { Badge } from "@/components/ui/badge";
import { Movies } from "../_components/movies";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getUpcomingApi } from "../hooks/get-upcoming-api";
import Footer from "../_components/footer";

type UpcomingMovies = {
  id: string;
  poster_path: string;
  original_title: string;
  vote_average: number | string;
  backdrop_path: string;
};

const UpcomingPage = () => {
  const [upComing, setUpcoming] = useState<UpcomingMovies[]>([]);

  useEffect(() => {
    const upPlay = async () => {
      const response = await getUpcomingApi();
      const firstTen = response?.results.splice(0, 20);
      setUpcoming(firstTen);
    };
    upPlay();
  }, []);

  const handleLogoClick = () => {
    // router.push("/upcoming");
  };

  return (
    <div>
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6  gap-[10px]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Upcoming movies
          </h1>
          <Link
            href={`/`}
            className=" items-center gap-1 text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer flex"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
          {upComing.map((el, index) => {
            return (
              <Link key={index} href={`/details/${el.id}`}>
                <div className="">
                  <Movies
                    title={el.original_title}
                    image={el.backdrop_path}
                    vote={el.vote_average}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpcomingPage;
