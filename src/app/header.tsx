"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Moon, Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex flex-row w-[1440px] h-[60px] justify-center items-center border border-green-500 space-x-80">
      <img className="w-[92px] h-[20px]" src="/Logo.png" alt=""></img>
      <div className="flex space-x-4">
        <Button className="w-[97px] h-[36px]" variant="outline" size="icon">
          <ChevronDown />
          Genre
        </Button>
        <div className="flex w-[380px] h-[36px] items-center border bg-gray-300 rounded-[8px]">
          {" "}
          <Search />
          <Input
            type="text"
            className="outline-none border-none w-full h-full"
            placeholder="search"
          />
        </div>
      </div>
      <Button className="">
        <Moon />
      </Button>
    </div>
  );
};
