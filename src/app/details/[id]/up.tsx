// import Upcoming from "@/app/_components/upcoming";
import Upcoming from "@/app/_components/upcoming";
import { getMovieId } from "@/app/hooks/get-id-api";

type UpcomingMovies = {
  id: string;                 
  poster_path: string;
  original_title: string;
  vote_average: number | string;
  backdrop_path: string;
};

interface PageProps {
  params: {
    id: string;
  };
}
const UpcomingPage = async ({id}:{id:string}) => {

  const results = await getMovieId(id);
return (
 <div>hhhhh{id}
 <Upcoming/>
 </div>
)
   
}
export default UpcomingPage;


