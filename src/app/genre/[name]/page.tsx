import { GenrePageComponent } from "@/app/_components/Genre";

type PageProps = {
  params: {
    name: string;
  };
};

export interface Genre {
  id: number;
  name: string;
}

const GenrePage = ({ params }: PageProps) => {
  const { name } = params;
  return <GenrePageComponent genreName={name} />;
};

export default GenrePage;
