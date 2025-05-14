"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { getHeroApi } from "../hooks/get-hero-api";
import { MobileHero } from "./mobileHero";

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

type PosterMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
};

export const NowPlay = () => {
  const [posters, setPoster] = useState<PosterMovies[]>([]);
  const [playQuery, setPlayQuery] = useState<string>();
  const [isLoading,setIsLoading] =useState(true);

  const playHandle = (param: string) => {
    setPlayQuery(param);
  };

  useEffect(() => {
    const nowPlaying = async () => {
      const response = await getHeroApi();

      const firstFive = response?.results.splice(0, 5);
      setPoster(firstFive);
    };
    nowPlaying();
  }, []);

  if (!isLoading) {
    return (
    <div className="flex justify-center items-center w-full max-w-screen-xl mx-auto h-[600px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
    </div>
    )
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto h-[600px] border-none border-gray-200 dark:border-gray-700">
      <Carousel className="hidden md:block h-full border-none">
        <CarouselContent className="border-none">
          {posters.map((el, index) => {
            console.log(el);
            return (
              <CarouselItem key={index}>
                <Card className="h-[600px] border-none rounded-none overflow-hidden">
                  <CardContent className="  p-0 h-full flex items-center justify-center">
                    <div className="relative h-full w-full">
                      <Image
                        src={TMDB_IMAGE_SERVICE_URL + el.backdrop_path}
                        alt={`Movie Poster ${index + 1}`}
                        width={400}
                        height={600}
                        className="object-cover w-full h-full"
                      />

                      <div className=" w-[404px] h-[264px] absolute bottom-35 left-25 right-0  to-transparent p-4">
                        <p className="text-white text-2xl ">Now playing:</p>
                        <h1 className="text-white text-3xl font-semibold">
                          {el.title}
                        </h1>
                        <div className="flex gap-3">
                          <Star className="text-yellow-400 fill-yellow-400" />
                          <p className="text-white">
                            {el.vote_average.toFixed(1)}
                          </p>
                        </div>

                        <div className="text-wrap text-white  w-[320px]">
                          {el.overview}
                        </div>
                        <button onClick={() => playHandle(`${""}`)}>
                          <Badge className="cursor-pointer mt-2 w-[145px] h-[40px] border border-gray-300 bg-gray-200 dark:border-gray-600 text-foreground ">
                            <Play />
                            Watch Trailer
                          </Badge>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700" />
        <CarouselNext className="hidden sm:flex absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700" />
      </Carousel>

      <MobileHero posters={posters} />
    </div>
  );
};
