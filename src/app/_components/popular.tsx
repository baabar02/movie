
import { Badge } from "@/components/ui/badge";
import { Movies } from "./movies";
import { ChevronDown, ChevronRight } from "lucide-react";

const Popular = () => {
  const upcoming = [
    // { img: "", rank: "", title: "" },
    <Movies />,
    <Movies />,
    <Movies />,
    <Movies />,
    <Movies />,
    <Movies />,
    <Movies />,
    <Movies />,
    <Movies />,
    <Movies />,
  ];

  return (
    <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 border border-green-400  gap-[10px] px-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Popular</h1>
        <p className="flex items-center gap-1 text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer flex">
          See more <ChevronRight className="w-4 h-4"/>
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
        {upcoming.map((el, index) => {
          return (
            <div key={index} className="">
              {el}
            </div>
          );

        })}
      </div>
    </div>
  );
};

export default Popular;