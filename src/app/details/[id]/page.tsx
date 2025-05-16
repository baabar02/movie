import { MovieDetail } from "@/app/_components/detail/MovieDetail";

type PageProps = {
  params: {
    id: string;
  };
};

const DetailsPage = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <div>
      <MovieDetail movieId={id} />
    </div>
  );
};
export default DetailsPage;
