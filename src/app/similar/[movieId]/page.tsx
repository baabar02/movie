import SimilarFull from "@/app/_components/similar/SimilarFull";

type PageProps = {
  params: {
    movieId: string;
  };
};

const SimilarPage = ({ params }: PageProps) => {
  return <SimilarFull movieId={params.movieId} />;
};

export default SimilarPage;

// /similar/1
