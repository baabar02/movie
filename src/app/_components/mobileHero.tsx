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

const TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p/original";

type PosterMovies = {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
};

type PostersProps = {
  posters: PosterMovies[];
};

export const MobileHero = ({ posters }: PostersProps) => {
  const playHandle = (movieId: number) => {
    console.log(`Play trailer for movie ID: ${movieId}`);
  };

  return (
    <div className="md:hidden relative w-screen  border-none border-gray-200 dark:border-gray-700">
      <Carousel className="h-full border-none">
        <CarouselContent className="border-none">
          {posters.map((el, index) => (
            <CarouselItem key={el.id} className="">
              <Card className=" border-none rounded-none overflow-hidden">
                <CardContent className="p-0 h-full flex items-center justify-center">
                  <div className="flex flex-col">
                    <div className="relative  h-[246px]">
                      <Image
                        src={TMDB_IMAGE_SERVICE_URL + el.backdrop_path}
                        alt={`Movie Poster ${index + 1}`}
                        width={300}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className=" h-[264px] left-4 right-0  p-4">
                      <p className="dark:text-white text-lg">Now playing:</p>
                      <div className="flex justify-between">
                        <h1 className="dark:text-white text-2xl font-semibold ">
                          {el.title}
                        </h1>
                        <div className="flex gap-2">
                          <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                          <p className="dark:text-white text-sm">
                            {el.vote_average.toFixed(1)}
                          </p>
                        </div>
                      </div>
                      <div className="text-wrap dark:text-white text-sm">
                        {el.overview}
                      </div>
                      <button onClick={() => playHandle(el.id)}>
                        <Badge className="cursor-pointer mt-2 w-[120px] h-[36px]  border border-gray-300 bg-gray-200 dark:border-gray-600 text-foreground">
                          <Play className="w-3 h-3 mr-2" />
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
        <CarouselPrevious className="hidden sm: absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700 " />
        <CarouselNext className="hidden sm:flex absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700 " />
      </Carousel>
    </div>
  );
};
