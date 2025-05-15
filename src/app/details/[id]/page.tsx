// import { getMovieId } from "@/app/hooks/get-id-api";

import MovieId from "@/app/_components/movieID";

interface PageProps {
  params: {
    id: string;
  };
}

const DetailsPage = async ({ params }: PageProps) => {

  const { id } = params;
  const result = await getMovieId(id);
  console.log(result, "s");

  return 
    
    <MovieId id={id}>
    
};
export default DetailsPage;
