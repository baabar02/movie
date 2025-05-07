// import { Search } from "lucide-react";
// type InputProps = {
//   placeholder?: string,
//   onChange:(event: React.ChangeEvent<HTMLInputElement>) => void
// } 

// export const Input = ({placeholder, onChange}: InputProps) => {
//   return (
//     <div className="flex w-[300px] rounded-[8px] items-center gap-2 bg-gray-300 h-[40px] border border-gray-500">
//       <Search />
//       <input 
//         onChange={inputHandler}
//         placeholder={placeholder}
//         className="w-[300px] h-[40px] "></input>
//     </div>
//   );
// };

import { Search } from "lucide-react"

type SearchInputProps = {
    inputHandler: (_event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ inputHandler }: SearchInputProps) => {
    return <div className="flex items-center gap-2 bg-gray-300 p-2 rounded-xl">
        <Search />
        <input type="text" className="outline-none w-full h-full" placeholder="Search" onChange={inputHandler} />
    </div>
}
 
