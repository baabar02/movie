

"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Moon, Search, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const genreFilter: string[] = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Sci-Fi",
    "Biography",
    "Crime",
    "Documentary",
    "Mystery", 
    "Drama",
    "History",
    "Thriller",
  ];

  const { setTheme, resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
  console.log(resolvedTheme,"d");
  
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
 console.log(setSearchQuery,"ss");
 
  };

  useEffect(() =>{
    window.localStorage.setItem('name', "bbb")
  },[])

  return (
    <header className="flex flex-row w-full max-w-screen-xl mx-auto h-[60px] justify-between items-center border-none border-gray-200 dark:border-gray-700 px-4">
    
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="Movie App Logo"
          width={92}
          height={20}
          className="object-contain"
        />
      </Link>

   
      <div className="flex items-center space-x-4">
      
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 items-center w-[500px]">
                <h1 className="w-[500px] text-xl font-semibold">Genre</h1>
                <h2 className="text-sm text-muted-foreground mb-4">
                  See lists of movies by genres
                </h2>
                <div className="flex flex-row flex-wrap gap-2">
                  {genreFilter.map((genre, index) => (
                    <Link
                      key={index}
                      href={`/genres/${genre.toLowerCase()}`}
                
                    >
                      <NavigationMenuLink>
                        <Badge
                          className="bg-transparent border border-gray-300 dark:border-gray-600 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 p-[6px] cursor-pointer"
                        >
                          {genre}
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Badge>
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex w-[min(380px,80vw)] h-[36px] items-center border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded-lg px-2">
          <Search className="w-5 h-5 text-gray-500" />
          <Input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="border-none bg-transparent focus:ring-0 w-full h-full"
            placeholder="Search movies..."
          />
        </div>
      </div>

    
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} mode`}
      >
        {isDarkTheme ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
    </header>
  );
};