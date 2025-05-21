// "use client";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ChevronRight, Moon, Search, Sun, X } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { SearchPage } from "../search/page";
// import { getGenreApi } from "../hooks/get-genre-api";
// import { getSearchApi } from "../hooks/get-search-api";
// import { SearchDialog } from "./searchDialog/SearchDialog";

// interface Genre {
//   id: number;
//   name: string;
// }

// interface MovieDetailProps {
//   movieId: string;
// }

// export const Header = ({ movieId }: MovieDetailProps) => {
//   const [genreFilter, setGenreFilter] = useState<Genre[]>([]);
//   // const [error, setError] = useState<string | null>(null);
//   const { setTheme, resolvedTheme } = useTheme();
//   const isDarkTheme = resolvedTheme === "dark";
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searcherMovies, setSearchedMovies] = useState([]);

//   const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const clearHandle = () => {
//     setIsSearchOpen(false);
//     setSearchQuery("");
//   };

//   useEffect(() => {
//     const fetchGenres = async () => {
//       const response = await getGenreApi();
//       console.log({
//         response,
//       });
//       setGenreFilter(response.genres);
//       console.log(response, "asdG");
//     };
//     fetchGenres();
//   }, []);

//   const onSearchMovies = async () => {
//     const movies = await getSearchApi(searchQuery, "1");
//     setSearchedMovies(movies);
//   };

//   return (
//     <header className="flex max-w-screen-xl sticky top-0 z-10 bg-background w-full mx-auto h-[56px] sm:h-[60px] items-center sm:px-4 justify-between border-none border-gray-200 dark:border-gray-700 px-4">
//       <div className={`${isSearchOpen ? "hidden sm:flex" : "flex"}`}>
//         <Link href="/">
//           <Image
//             src="/Logo.png"
//             alt="Movie App Logo"
//             width={80}
//             height={18}
//             className="sm:w-[92px] sm:h-[20px] object-contain"
//           />
//         </Link>
//       </div>

//       <div className="flex space-x-4">
//         <div
//           className={`${
//             isSearchOpen ? "absolute left-3 sm:static sm:flex" : "flex"
//           }`}
//         >
//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-sm sm:text-base">
//                   Genre
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className="p-3 sm:p-4 w-[90vw] max-w-[400px] sm:max-w-[500px]">
//                   <h1 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
//                     Genre
//                   </h1>
//                   <h2 className="text-sm sm:w-[500px] text-muted-foreground mb-4">
//                     See lists of movies by genres
//                   </h2>
//                   <div className="flex flex-row flex-wrap gap-2">
//                     {genreFilter?.map((genre) => (
//                       <Link
//                         key={genre.id}
//                         href={`/genre/${genre.name.toLowerCase()}`}
//                       >
//                         <NavigationMenuLink>
//                           <Badge className="bg-transparent z-10 border border-gray-300 dark:border-gray-600 text-foreground hover:bg-gray-500 dark:hover:bg-gray-500 px-2 py-1 text-xs sm:text-sm cursor-pointer">
//                             {genre.name}
//                             <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
//                           </Badge>
//                         </NavigationMenuLink>
//                       </Link>
//                     ))}
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//       </div>

//       <div
//         className={`${
//           isSearchOpen ? "hidden sm:flex" : "flex"
//         } items-center border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded-lg px-2 sm:px-3 h-[32px] sm:h-[36px]`}
//       >
//         <Button
//           variant="ghost"
//           size="icon"
//           className="w-8 h-8 sm:w-6 sm:h-6 p-0"
//           onClick={() => setIsSearchOpen(true)}
//           aria-label="Open search"
//         >
//           <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
//         </Button>
//         <div className="hidden sm:flex items-center w-[min(200px,60vw)] sm:w-[min(300px,70vw)] md:w-[380px]">
//           <Input
//             id="search"
//             type="text"
//             value={searchQuery}
//             onChange={handleSearch}
//             className="border-none bg-transparent focus:ring-0 text-xs sm:text-sm w-full h-full"
//             placeholder="Search movies..."
//             aria-label="Search movies"
        
            
//           />
//           <SearchDialog 
          
//           onSearch={onSearchMovies} movies={searcherMovies} />
//         </div>
//       </div>

//       {isSearchOpen && (
//         <div className="absolute left-3 right-3 top-14 bg-white dark:bg-gray-400 p-3 sm:hidden">
//           <div className="flex w-full items-center border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded-lg px-2">
//             <Search className="w-4 h-4 text-gray-500" />
//             <Input
//               id="mobile-search"
//               type="text"
//               value={searchQuery}
//               onChange={handleSearch}
//               className="border-none bg-transparent focus:ring-0 text-xs w-full h-full"
//               placeholder="Search movies..."
//               aria-label="Search movies"
//               autoFocus
//             />
//             <Button
//               onClick={clearHandle}
//               size="icon"
//               variant="ghost"
//               aria-label="Clear and close search"
//             >
//               <X className="w-4 h-4 text-gray-500" />
//             </Button>
//           </div>
//           {searchQuery && <SearchPage searchValue={searchQuery} page="1" />}
//         </div>
//       )}

//       <Button
//         variant="ghost"
//         size="icon"
//         className="w-8 h-8 sm:w-10 sm:h-10"
//         onClick={toggleTheme}
//         aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} mode`}
//       >
//         {isDarkTheme ? (
//           <Sun className="w-5 h-5" />
//         ) : (
//           <Moon className="w-5 h-5" />
//         )}
//       </Button>
//     </header>
//   );
// };


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
import { ChevronRight, Moon, Search, Sun, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchPage } from "../search/page";
import { getGenreApi } from "../hooks/get-genre-api";
import { getSearchApi } from "../hooks/get-search-api";
import { SearchDialog } from "./searchDialog/SearchDialog";
interface Genre {
  id: number;
  name: string;
}

interface MovieDetailProps {
  movieId: string;
}

export const Header = ({ movieId }: MovieDetailProps) => {
  const [genreFilter, setGenreFilter] = useState<Genre[]>([]);
  // const [error, setError] = useState<string | null>(null);
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searcherMovies, setSearchedMovies] = useState([]);

  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const clearHandle = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await getGenreApi();
      console.log({
        response,
      });
      setGenreFilter(response.genres);
      console.log(response, "asdG");
    };
    fetchGenres();
  }, []);

  const onSearchMovies = async () => {
    const movies = await getSearchApi(searchQuery, "1");
    setSearchedMovies(movies);
  };

  return (
    <header className="flex max-w-screen-xl sticky top-0 z-10 bg-background w-full mx-auto h-[56px] sm:h-[60px] items-center sm:px-4 justify-between border-none border-gray-200 dark:border-gray-700 px-4">
      <div className={`${isSearchOpen ? "hidden sm:flex" : "flex"}`}>
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Movie App Logo"
            width={80}
            height={18}
            className="sm:w-[92px] sm:h-[20px] object-contain"
          />
        </Link>
      </div>

      <div className="flex space-x-4">
        <div
          className={`${
            isSearchOpen ? "absolute left-3 sm:static sm:flex" : "flex"
          }`}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm sm:text-base">
                  Genre
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-3 sm:p-4 w-[90vw] max-w-[400px] sm:max-w-[500px]">
                  <h1 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                    Genre
                  </h1>
                  <h2 className="text-sm sm:w-[500px] text-muted-foreground mb-4">
                    See lists of movies by genres
                  </h2>
                  <div className="flex flex-row flex-wrap gap-2">
                    {genreFilter?.map((genre) => (
                      <Link
                        key={genre.id}
                        href={`/genre/${genre.name.toLowerCase()}`}
                      >
                        <NavigationMenuLink>
                          <Badge className="bg-transparent z-10 border border-gray-300 dark:border-gray-600 text-foreground hover:bg-gray-500 dark:hover:bg-gray-500 px-2 py-1 text-xs sm:text-sm cursor-pointer">
                            {genre.name}
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                          </Badge>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div
        className={`${
          isSearchOpen ? "hidden sm:flex" : "flex"
        } items-center border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded-lg px-2 sm:px-3 h-[32px] sm:h-[36px]`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 sm:w-6 sm:h-6 p-0"
          onClick={() => setIsSearchOpen(true)}
          aria-label="Open search"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
        </Button>
        <div className="hidden sm:flex items-center w-[min(200px,60vw)] sm:w-[min(300px,70vw)] md:w-[380px]">
          <Input
            id="search"
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="border-none bg-transparent focus:ring-0 text-xs sm:text-sm w-full h-full"
            placeholder="Search movies..."
            aria-label="Search movies"
          />
          <SearchDialog 
          
          onSearch={onSearchMovies} movies={searcherMovies} />
        </div>
      </div>

      {isSearchOpen && (
        <div className="absolute left-3 right-3 top-14 bg-white dark:bg-gray-400 p-3 sm:hidden">
          <div className="flex w-full items-center border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded-lg px-2">
            <Search className="w-4 h-4 text-gray-500" />
            <Input
              id="mobile-search"
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="border-none bg-transparent focus:ring-0 text-xs w-full h-full"
              placeholder="Search movies..."
              aria-label="Search movies"
              autoFocus
            />
            <Button
              onClick={clearHandle}
              size="icon"
              variant="ghost"
              aria-label="Clear and close search"
            >
              <X className="w-4 h-4 text-gray-500" />
            </Button>
          </div>
          {searchQuery && <SearchPage searchValue={searchQuery} page="1" />}
        </div>
      )}

      <Button
        variant="ghost"
        size="icon"
        className="w-8 h-8 sm:w-10 sm:h-10"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} mode`}
      >
        {isDarkTheme ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </Button>
    </header>
  );
};