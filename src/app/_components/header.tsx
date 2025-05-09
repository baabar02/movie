"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronRight, Moon, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  const genreFilter: Array<string> = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Sci-Fi",
    "Biography",
    "Crime",
    "Documentary",
    "Mistery",
    "Drama",
    "History",
    "Thriller",
  ];
  return (
    <div className="flex flex-row w-[1440px] h-[60px] justify-around items-center border border-green-500 space-x-80">
      <img className="w-[92px] h-[20px]" src="/Logo.png" alt=""></img>
      <div className="flex space-x-4">
        {/* <Button className="w-[97px] h-[36px]" variant="outline" size="icon">
          <ChevronDown />
          Genre
        </Button> */}
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="">
                  Genre
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[500px] items-center">
                  <h1 className="w-[500px] text-xl ">Genre</h1>
                  <h2 className=" text-l ">See lists of movies by genres</h2>

                  <NavigationMenuLink className="flex flex-row flex-wrap gap-3">
                    {genreFilter.map((el, index) => {
                      return (
                        <Badge
                          key={index}
                          className="bg-transparent border border-gray-300 text-black p-[6px]"
                        >
                          {el}
                          <ChevronRight />
                        </Badge>
                      );
                    })}
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

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
