import { MovieDetail } from "@/app/_components/detail/MovieDetail";
import SimilarMoviesPage from "@/app/_components/detail/similarPage";
import UpcomingFullPage from "@/app/_components/upcoming/UpcomingPage";
import Upcoming from "@/app/_components/Upcoming";

type PageProps = {
  params: {
    id: string;
  };
};

export default function DetailsPage({ params }: PageProps) {
  const { id } = params;
  console.log("ID from params:", params);
  return (
    <div>
      <MovieDetail movieId={id} />
      {/* <UpcomingFullPage  /> */}
    </div>
  );
}
