import { Badge } from "@/components/ui/badge";
import { Movies } from "./movies";
import { ChevronDown, ChevronRight } from "lucide-react";

const Upcoming = () => {
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
    <div className="w-full max-screen-xl border border-green-400 flex-col flex-wrap gap-[10px] px-5">
      <div className="flex justify-center gap-50 md:gap-100 items-center">
        <h1 className="">Upcoming</h1>
        <p className="h-[20px] cursor-pointer flex">
          See more <ChevronRight />
        </p>
        {/* <Badge className="h-[20px]">
          See coming 
        </Badge> */}
      </div>
      <div className="grid grid-cols-2 mx-auto flex-wrap w-full lg:w-[1440px] gap-4 space-between justify-center">
        {upcoming.map((el, index) => {
          return (
            <div key={index} className="flex flex-col">
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Upcoming;
