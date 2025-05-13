
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

type UpcomingMovies = {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
};

type PostersProps = {
  upcoming: UpcomingMovies[];
};

export const Posters = ({ upcoming }: PostersProps) => {
  const playHandle = (movieId: number) => {
    console.log(`Play trailer for movie ID: ${movieId}`);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto h-[400px] border-none border-gray-200 dark:border-gray-700">
  
        <Carousel className="h-full border-none">
          <CarouselContent className="border-none">
            {upcoming.map((el, index) => (
              <CarouselItem key={el.id} className="w-[300px]">
                <Card className="h-[400px] border-none rounded-none overflow-hidden">
                  <CardContent className="p-0 h-full flex items-center justify-center">
                    <div className="relative w-[300px] h-[400px]">
                      <Image
                        src={
                          el.backdrop_path
                            ? `${TMDB_IMAGE_SERVICE_URL}${el.backdrop_path}`
                            : "/placeholder-image.jpg"
                        }
                        alt={`Movie Poster ${index + 1}`}
                        width={300}
                        height={400}
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 300px"
                        priority={index === 0}
                      />
                      <div className="w-[300px] h-[200px] absolute bottom-4 left-4 right-0  p-4">
                        <p className="text-white text-lg">Now playing:</p>
                        <div className="flex justify-between">
                          <h1 className="text-white text-xl font-semibold truncate">{el.title}</h1>
                          <div className="flex gap-2">
                            <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                            <p className="text-white text-sm">{el.vote_average}</p>
                          </div>
                        </div>
                        <div className="text-wrap text-white w-[250px] text-sm line-clamp-2">
                          {el.overview}
                        </div>
                        <button onClick={() => playHandle(el.id)}>
                          <Badge className="cursor-pointer mt-2 w-[120px] h-[36px] bg-transparent border border-gray-300 bg-gray-200 dark:border-gray-600 text-foreground">
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
          <CarouselPrevious className="hidden sm:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700" />
          <CarouselNext className="hidden sm:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700" />
        </Carousel>
     
    </div>
  );
};