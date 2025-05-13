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
type UpcomingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  playHandle: boolean;
};

export const Posters = ({
  adult,
  backdrop_path,
  id,
  title,
  overview,
  vote_average,
  playHandle,
}: UpcomingMovies) => {
  return (
    <div className="">
      {" "}
      <div className="relative w-full max-w-screen-xl mx-auto h-[510px] border-none border-gray-200 dark:border-gray-700">
        <Carousel className="h-full border-none">
          <CarouselContent className="border-none">
            {upcoming.map((el, index) => {
              console.log(el);
              return (
                <CarouselItem key={index}>
                  <Card className="h-[510px] border-none rounded-none overflow-hidden">
                    <CardContent className="  p-0 h-full flex items-center justify-center">
                      <div className="relative h-[246px] w-full">
                        <Image
                          src={TMDB_IMAGE_SERVICE_URL + el.backdrop_path}
                          alt={`Movie Poster ${index + 1}`}
                          width={375}
                          height={246}
                          className="object-cover w-full h-full"
                        />

                        <div className=" w-[375px] h-[264px] absolute bottom-35 left-5 right-0  to-transparent p-4">
                          <p className="text-white text-Lg ">Now playing:</p>
                          <div className="flex space-between">
                            <h1 className="text-white text-2xl font-semibold">
                              {el.title}
                            </h1>
                            <div className="flex gap-3">
                              <Star className="text-yellow-400 fill-yellow-400" />
                              <p className="text-white">{el.vote_average}</p>
                            </div>
                          </div>

                          <div className="text-wrap text-white  w-[300px]">
                            {el.overview}
                          </div>
                          <button onClick={() => playHandle<boolean>(`${""}`)}>
                            <Badge className="cursor-pointer mt-2 w-[145px] h-[40px] bg-transparent border border-gray-300 bg-gray-200 dark:border-gray-600 text-foreground ">
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
          <CarouselPrevious className="hidden sm:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700" />
          <CarouselNext className="hidden sm:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700" />
        </Carousel>
      </div>
    </div>
  );
};
