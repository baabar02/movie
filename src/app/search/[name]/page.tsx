import SearchComponent from "../../_components/Search";

type SearchProps = {
  params: {
    name: string;
  };
};

export default function SearchPage({ params }: SearchProps) {
  const { name } = params;

  return (
    <div>
      <SearchComponent name={name} />
    </div>
  );
}
