"use client";

import { Carousel } from "@/components/ui/carousel";
import { Button } from "../components/ui/button";
import { Header } from "./_components/header";
import { NowPlay } from "./_components/nowplaying";
import Upcoming from "./_components/upcoming";
import Popular from "./_components/popular";
import TopRated from "./_components/toprated";
import Bottom from "./_components/bottom";
// import { MobileHero } from "./_components/mobileHero";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Header /> */}
      <NowPlay />
      <Upcoming />
      <Popular />
      {/* <TopRated />
      <Bottom />  */}
    </div>
    // <div className="border flex justify-center">
    //   <div className="w-screen-xl">home</div>
    // </div>
  );
}
