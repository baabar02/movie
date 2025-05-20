"use client";

import { Button } from "../components/ui/button";
import Footer from "./_components/footer";
import Upcoming from "./_components/upcoming";
import { NowPlay } from "./_components/NowPlaying";
import Popular from "./_components/Popular";
import TopRated from "./_components/TopRated";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <NowPlay />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
