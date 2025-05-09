import { Copyright } from "lucide-react";
const Bottom = () => {
  return (
    <div className="w-[1440px] h-[280px] bg-[#4338CA] border border-green-400">
      <div className="">
        <img src="/Logo-1.png" />
        <p className="flex text-white gap-2">
          <Copyright className="" />
          2024 Movie Z. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Bottom;
