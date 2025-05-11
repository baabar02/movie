import { Copyright } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
const Bottom = () => {
const adds = [
  {name:"Facebook", url:"https://www.facebook.com"},
  {name:"Twitter", url:"https://www.x.com"},
  {name:"Instagram", url:"https://www.instagram.com"},
  {name:"Youtube", url:"https://www.youtube.com"}
]

  return (
    <div className="flex justify-center w-full max-w-screen-xl h-[280px] bg-[#4338CA] border border-green-400">
      <div className="flex  justify-center gap-40 mt-8 w-[1280px] h-[200px]">
      <div className="">
        <img src="/Logo-1.png" />
        <p className="flex text-white gap-2">
          <Copyright className="" />
          2024 Movie Z. All Rights Reserved.
        </p>
      </div>
      <div>
        <p className="text-white">Contact information</p>

        <div className="relative flex gap-2">
          
          <Mail className="text-white"/>
        
          <div className="">
            <p className="text-white">  Email:</p>
            <p className="text-white">  support@movieZ.com</p>
          </div>
        
        </div>
        <div className="relative flex gap-2">
          
          <Phone className="text-white"/>
        
          <div className="">
            <p className="text-white">  Phone:</p>
            <p className="text-white">  +976(11)123-456</p>
          </div>
        
        </div>

      </div>
    
      <div className="">
        <p className="text-white">Follow us</p>
        <div className="flex flex-row text-white gap-3">
        {adds.map((el,index)=> (
          <a key={index} href={el.url} className="text-white hover:underline">
            {el.name}
          </a>
        )
        )}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Bottom;
