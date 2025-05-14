import { Copyright } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { useTheme } from "next-themes";
const Footer = () => {
const adds = [
  {name:"Facebook", url:"https://www.facebook.com"},
  {name:"Twitter", url:"https://www.x.com"},
  {name:"Instagram", url:"https://www.instagram.com"},
  {name:"Youtube", url:"https://www.youtube.com"}
]

 const { setTheme, resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
 const logoSrc = isDarkTheme ? "/Logo.png" : "/Logo-1.png"

  return (
    <div className="flex justify-center  w-full max-w-screen-xl h-[308px]  sm:h-[280px] dark:bg-white bg-[#4338CA] ">
      <div className="flex-row sm:flex px-6 sm:flex-row sm:justify-center gap-40 mt-8 w-full h-[200px]">
      <div className="flex flex-col  items-start sm:items-start">
    

        <img src={logoSrc} />
        <p className="flex mt-3 items-center text-white dark:text-black text-xs sm:text-base gap-2">
          <Copyright className="w-4 h-4" />
          2024 Movie Z. All Rights Reserved.
        </p>
      </div>
      <div className="flex mt-[10px] gap-[80px] px-auto">
      <div>
        <p className="text-white dark:text-black">Contact information</p>

        <div className="relative flex gap-2 mb-2">
          
          <Mail className="text-white dark:text-black"/>
        
          <div className="">
            <p className="text-white dark:text-black text-sm sm:text-base"> Email:</p>
            <p className="text-white dark:text-black text-sm sm:text-base"> support@movieZ.com</p>
          </div>
        
        </div>
        <div className="relative flex gap-2">
          
          <Phone className="text-white dark:text-black"/>
        
          <div className="">
            <p className="text-white dark:text-black">Phone:</p>
            <p className="text-white dark:text-black">+976(11)123-456</p>
          </div>
        
        </div>

      </div>
    
      <div className="">
        <p className="flex flex-col items-center sm:items-start text-white dark:text-black">Follow us</p>
        <div className="flex flex-col sm:flex-row text-white gap-3">
        {adds.map((el,index)=> (
          <a key={index} href={el.url} className="text-white dark:text-black hover:underline">
            {el.name}
          </a>
        )
        )}
      </div>
      </div>

      </div>
    
      </div>
    </div>
  );
};

export default Footer;
