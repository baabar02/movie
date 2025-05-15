'use client';

import { Carousel } from "@/components/ui/carousel";
import { Button } from "../components/ui/button";
import { Header } from "./_components/header";
import { NowPlay } from "./_components/nowplaying";
import Upcoming from "./_components/upcoming";
import Popular from "./_components/popular";
import TopRated from "./_components/toprated";
import Footer from "./_components/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

const arr = [
  { name: "Sinners", id: "213" },
  { name: "Karate kid", id: "4533" },
];

export default function Home() {
 const router = useRouter();
  const routerHandle = (path:string)=>{
    router.push(path)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Header /> */}
      <NowPlay />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
      <Button>
        movie-1
      </Button>
      {arr.map((el) => {

        return (
             <button onClick={()=>routerHandle(`/details/${el.id}`)}>
            {el.name} 
          </button>
        
        );
      })}
    </div>
  );
}



