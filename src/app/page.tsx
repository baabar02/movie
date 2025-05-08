"use client";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "../components/ui/button";
import { Header } from "./header";
import { Upcoming } from "./upcoming";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Upcoming />
    </div>
  );
}
