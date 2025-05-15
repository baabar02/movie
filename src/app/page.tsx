"use client";

import { Carousel } from "@/components/ui/carousel";
import { Button } from "../components/ui/button";
import { Header } from "./_components/header";
import { NowPlay } from "./_components/nowplaying";
import Upcoming from "./_components/upcoming";
import Popular from "./_components/popular";
import TopRated from "./_components/toprated";
import Footer from "./_components/footer";

const arr = [
  { name: "Sinners", id: "213" },
  { name: "Karate kid", id: "33" },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Header /> */}
      <NowPlay />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
      {arr.map((el) => {
        return (
          <div>
            {el.name} {el.id}
          </div>
        );
      })}
    </div>
  );
}
