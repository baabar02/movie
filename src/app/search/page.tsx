"use client";

import { useEffect, useState } from "react";
import { getSearchApi } from "../hooks/get-search-api";

type SearchProps = {
  searchValue: string;
  page: string;
  searchResult: string;
};

export const SearchPage = (searchValue: string, page: string) => {
  const [searchQuery, setSearchQuery] = useState<SearchProps>();

  useEffect(() => {
    const searchPlay = async () => {
      const response = await getSearchApi(searchValue, page);
      setSearchQuery(response);
      console.log(response, "search");
    };
    searchPlay();
  }, []);

  return <div> </div>;
};
