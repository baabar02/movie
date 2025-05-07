import { Search } from "lucide-react";
export const Input = () => {
  return (
    <div className="flex w-[300px] h-[40px] border border-gray-500">
      <Search />
      <input className="w-[300px] h-[40px] border border-gray-500"></input>
    </div>
  );
};
