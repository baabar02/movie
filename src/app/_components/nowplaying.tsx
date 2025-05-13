
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
import { Star, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { getHeroApi } from "../hooks/get-hero-api";
import { Posters } from "./posters";

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

type UpcomingMovies = {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
};

export const NowPlay = () => {
  const [upcoming, setUpcoming] = useState<UpcomingMovies[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const nowPlaying = async () => {
      const response = await getHeroApi();
      const firstFive = response?.results?.slice(0, 5);
      setUpcoming(firstFive);
    };
    nowPlaying();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const playHandle = (movieId: number) => {
    console.log(`Play trailer for movie ID: ${movieId}`);
  };

  return (
    <div className="bg-gray-900">
      {isMobile ? (
        <Posters upcoming={upcoming} />
      ) : (
        <div className="relative w-full max-w-screen-xl mx-auto h-[600px] border-none border-gray-200 dark:border-gray-700">
          {upcoming.length ? (
            <Carousel className="h-full border-none">
              <CarouselContent className="border-none">
                {upcoming.map((el, index) => (
                  <CarouselItem key={el.id} className="w-[400px]">
                    <Card className="h-[600px] border-none rounded-none overflow-hidden">
                      <CardContent className="p-0 h-full flex items-center justify-center">
                        <div className="relative w-[400px] h-[600px]">
                          <Image
                            src={
                              el.backdrop_path
                                ? `${TMDB_IMAGE_SERVICE_URL}${el.backdrop_path}`
                                : "/placeholder-image.jpg"
                            }
                            alt={`Movie Poster ${index + 1}`}
                            width={400}
                            height={600}
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 400px"
                            priority={index === 0}
                          />
                          <div className="w-[400px] h-[264px] absolute bottom-8 left-6 right-0  p-4">
                            <p className="dark:text-white text-2xl">Now playing:</p>
                            <h1 className="dark:text-white text-3xl font-semibold ">{el.title}</h1>
                            <div className="flex gap-3">
                              <Star className="text-yellow-400 fill-yellow-400" />
                              <p className="dark:text-white">{el.vote_average}</p>
                            </div>
                            <div className="text-wrap dark:text-white w-[300px] line-clamp-3">
                              {el.overview}
                            </div>
                            <button onClick={() => playHandle(el.id)}>
                              <Badge className="cursor-pointer mt-2 w-[145px] h-[40px] bg-transparent border border-gray-300 bg-gray-200 dark:border-gray-600 text-foreground">
                                <Play />
                                Watch Trailer
                              </Badge>
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700" />
              <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700" />
            </Carousel>
          ) : (
            <div className="text-center text-white text-2xl h-full flex items-center justify-center">
              No movies available
            </div>
          )}
        </div>
      )}
    </div>
  );
};


