// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";

// export const NowPlay = () => {

//   const posters = [
//     "/poster-1.png",
//     "/poster-2.png"
//   ]

//   return (
//     <div className="relative items-center h-[800px] w-full max-w-screen-xl border border-green-500">
//       <Carousel className="h-full bg-gray-200">
//         <CarouselContent className="">
          
//           {Array.from({ length: 5 }).map((poster, index) => (
//             <CarouselItem key={index}>
//               <div className="">
//                 <Card className="h-[800px] border-red-500 bg-yellow-200 rounded-none">
//                   <CardContent className="flex border border-green-300 h-full bg-gray-100 aspect-square items-center justify-center p-6">
//                     <span className=" text-4xl font-semibold">
//                       {index + 1} text
//                     </span>
//                     <image src={poster}
//                     />
//                     <img src= {poster}/>
        
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-200" />
//         <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-200" />
//       </Carousel>
//     </div>
//   );
// };

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

export const NowPlay = () => {
  const posters = [
    "/poster-1.png",
    "/poster-2.png",
    "/poster-2.png",
    "/poster-2.png",
  ];

  return (
    <div className="relative w-full max-w-screen-xl mx-auto h-[600px] border-none border-gray-200 dark:border-gray-700">
      <Carousel className="h-full border-none">
        <CarouselContent className="border-none">
          {posters.map((poster, index) => (
            <CarouselItem key={index}>
              <Card className="h-[600px] border-none rounded-none overflow-hidden">
                <CardContent className="p-0 h-full flex items-center justify-center">
                  <Image
                    src={poster}
                    alt={`Movie Poster ${index + 1}`}
                    width={400}
                    height={600}
                    className="object-cover w-full h-full"
                    priority={index === 0} // Optimize the first image
                  />
                  {/* Optional: Overlay for placeholder text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-white text-2xl font-semibold">
                      Movie {index + 1}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700" />
      </Carousel>
    </div>
  );
};