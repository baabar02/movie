import { getMovieId } from "@/app/hooks/get-id-api";

import Detail from "@/app/_components/detailsPage";
import Upcoming from "@/app/_components/upcoming";
import UpcomingPage from "./up";


interface PageProps {
  params: {
    id: string;
  };
}


const DetailsPage = async ({params}:PageProps) => {
const {id} = params;


  return (
    
  <UpcomingPage id={id}/>



  )
};
export default DetailsPage;