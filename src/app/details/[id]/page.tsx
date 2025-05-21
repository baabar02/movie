import { MovieDetail } from "@/app/_components/detail/MovieDetail";

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
 
    </div>
  );
}
