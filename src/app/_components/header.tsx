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

  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const clearHandle = () => {
    // setIsSearchOpen(!isSearchOpen ? isSearchOpen : false);
    setIsSearchOpen((prev) => !prev);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    console.log(setSearchQuery, "ss");
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    console.log("search toggle", !isSearchOpen);
  };
  // useEffect(() => {
  //   window.localStorage.setItem("name", "bbb");
  // }, []);

  return (
    <header className="flex flex-row max-w-screen-xl sticky top-0 z-10 bg-background w-full mx-auto h-[56px] sm:h-[60px] justify-between items-center px-3 sm:px-4 mx-auto h-[60px] justify-between items-between border-none border-gray-200 dark:border-gray-700 px-4">
      <div className={`${isSearchOpen ? "hidden sm:flex" : "flex"}`}>
        <Link href={`details/id `}>
          <Image
            defaultValue={searchQuery}
            // onClick={handleSearch}
            src="/Logo.png"
            alt="Movie App Logo"
            width={80}
            height={18}
            className="sm:w-[92px] sm:h-[20px] object-contain"
          />
        </Link>
      </div>

      <div className="flex space-between sm:space-x-4">
        <div
          className={`${isSearchOpen} ? "absolute left-3 sm:static sm: flex":"flex"`}
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
                  <h2 className="text-sm text-muted-foreground mb-4">
                    See lists of movies by genres
                  </h2>
                  <div className="flex flex-row flex-wrap gap-2">
                    {genreFilter.map((genre, index) => (
                      <Link key={index} href={`/genres/${genre.toLowerCase()}`}>
                        <NavigationMenuLink>
                          <Badge className="bg-transparent border border-gray-300 dark:border-gray-600 text-foreground hover:bg-gray-800 dark:hover:bg-gray-800 px-2 py-1 text-xs sm:text-sm cursor-pointer">
                            {genre}
                            <ChevronRight className="w-3 h-3 ml-1 sm:w-4 sm:h-4 ml-1" />
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
          onClick={toggleSearch}
          aria-label="Toggle search"
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
        </div>
      </div>

      {isSearchOpen && (
        <div className="flex left-10 w-90 bg-white dark:bg-gray-900 p-3 sm:hidden ">
          <div className=" flex w-full items-center border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded-lg px-2">
            <Search className="w-4 h-4 text-gray-500" />{" "}
            <Input
              id="mobile-search"
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="border-none bg-transparent focus:ring-0 text-xs w-full h-full"
              placeholder="Search movies..."
              aria-label="Search movies"
            />
            <Button onClick={clearHandle} size="icon" variant="ghost">
              x
            </Button>
          </div>
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
// import { ChevronRight, CircleCheck, Moon, Search, Sun } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { getHeroApi } from "../hooks/get-hero-api";
// import { getGenreApi } from "../hooks/get-genre-api";

// type filteredGenres = {
//   adult: boolean;
//   backdrop_path: string;
//   id: number;
//   title: string;
//   overview: string;
//   vote_average: number;
// };

// export const Header = () => {
//   const { setTheme, resolvedTheme } = useTheme();
//   const isDarkTheme = resolvedTheme === "dark";

//   const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [filterGenres, setFilterGenres] = useState<filteredGenres[]>([]);
//   const [genres, setGenres] = useState([]);

//   // const selectedGenre = "Crime";

//   const clearHandle = () => {
//     // setIsSearchOpen(!isSearchOpen ? isSearchOpen : false);
//     setIsSearchOpen((prev) => !prev);
//   };
//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };
//   const [listOpen, setListOpen] = useState("");

//   const clickHandle = () => {
//     // setListOpen(!listOpen);
//   };

//   // const clickSrc = !listOpen ? (
//   //   <ChevronRight />
//   // ) : (
//   //   <span onClick={clickHandle}>X</span>
//   // );

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//     console.log("search toggle", !isSearchOpen);
//   };

//   useEffect(() => {
//     const GenrePlay = async () => {
//       const response = await getGenreApi();
//       setGenres(response);
//     };
//     GenrePlay();
//   }, []);

//   return (
//     <header className="flex flex-row max-w-screen-xl sticky top-0 z-10 bg-background w-full mx-auto h-[56px] sm:h-[60px] justify-between items-center px-3 sm:px-4 mx-auto h-[60px] justify-between items-between border-none border-gray-200 dark:border-gray-700 px-4">
//       <div className={`${isSearchOpen ? "hidden sm:flex" : "flex"}`}>
//         <Link href="">
//           <Image
//             defaultValue={searchQuery}
//             // onClick={handleSearch}
//             src="/Logo.png"
//             alt="Movie App Logo"
//             width={80}
//             height={18}
//             className="sm:w-[92px] sm:h-[20px] object-contain"
//           />
//         </Link>
//       </div>

//       <div className="flex space-between sm:space-x-4">
//         <div
//           className={`${isSearchOpen} ? "absolute left-3 sm:static sm: flex":"flex"`}
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
//                   <h2 className="text-sm text-muted-foreground mb-4">
//                     See lists of movies by genres
//                   </h2>
//                   <div className="flex flex-row flex-wrap gap-2">
//                     {genres.map((genre, index) => (
//                       <Link key={index} href={`/genre/${""}`}>
//                         <NavigationMenuLink>
//                           <Badge
//                             key={genre.id}
//                             // onClick={clearHandle}
//                             className="bg-transparent border border-gray-300 dark:border-gray-400 text-foreground hover:bg-gray-200 <> dark:hover:bg-gray-500 px-2 py-1 text-xs sm:text-sm cursor-pointer"
//                           >
//                             {genre.name}
//                             <ChevronRight className="w-3 h-3 ml-1 sm:w-4 sm:h-4 ml-1" />

//                             {/* {selectedGenre === genre.name ? (
//                               <CircleCheck />
//                             ) : (
//                               <ChevronRight className="w-3 h-3 ml-1 sm:w-4 sm:h-4 ml-1" />
//                             )} */}
//                           </Badge>{" "}
//                         </NavigationMenuLink>{" "}
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
//           onClick={toggleSearch}
//           aria-label="Toggle search"
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
//         </div>
//       </div>

//       {isSearchOpen && (
//         <div className="flex left-10 w-90 bg-white dark:bg-gray-900 p-3 sm:hidden ">
//           <div className=" flex w-full items-center border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 rounded-lg px-2">
//             <Search className="w-4 h-4 text-gray-500" />{" "}
//             <Input
//               id="mobile-search"
//               type="text"
//               value={searchQuery}
//               onChange={handleSearch}
//               className="border-none bg-transparent focus:ring-0 text-xs w-full h-full"
//               placeholder="Search movies..."
//               aria-label="Search movies"
//             />
//             <Button onClick={clearHandle} size="icon" variant="ghost">
//               x
//             </Button>
//           </div>
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
