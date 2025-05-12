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
    <div className=" h-[980px] w-full max-w-screen-xl border border-green-400 flex flex-col flex-wrap gap-[10px]">
      <div className="flex justify-center space-x-240 items-center">
        <h1 className="text-3xl">Popular</h1>
        <p className="h-[20px] cursor-pointer flex">
          See more <ChevronRight />
        </p>
        {/* <Badge className="h-[20px]">
          See coming 
        </Badge> */}
      </div>
      <div className="flex flex- col flex-wrap gap-4 justify-center">
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

export default Popular;
