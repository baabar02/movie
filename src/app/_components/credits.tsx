"use client";
import { useEffect, useState } from "react";
import { MovieDetail } from "./detail/MovieDetail";
import { getCrewApi } from "../hooks/get-crew-api";
import { MovieDetails } from "@/types";

type CreditsProps = {
  movieId: string;
};

interface CastPerson {
  id: number;
  name: string;
  character: string;
}

interface CrewPerson {
  id: number;
  name: string;
  job: string;
}

export const Credits = ({ movieId }: CreditsProps) => {
  const [crew, setCrew] = useState<CrewPerson[]>([]);
  const [cast, setCast] = useState<CastPerson[]>([]);
  const [director, setDirector] = useState<CrewPerson[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { cast, crew } = await getCrewApi(movieId);
        setCast(cast.splice(0, 3));
        setCrew(crew.splice(0, 3));
        setDirector(crew);
        console.log(cast, crew, "cast, crew");
      } catch (error) {
        console.error("Error fetching movie:", error);
        // setMovie(null);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="flex">Director</h1>

      {director.map((person) => {
        // const findOne = person.job.toLowerCase().includes("director");

        return (
          <p key={person.id}>
            {/* {person.job.toLowerCase().includes("director") && `${person.name}`} */}
          </p>
        );
      })}
      <h1>Writers</h1>
      {crew.map((person) => (
        <p key={person.id}>
          {person.name} - {person.job}
        </p>
      ))}
      <h1>Cast</h1>
      {cast.map((person) => (
        <p key={person.id}>
          {person.name} as {person.character}
        </p>
      ))}
    </div>
  );
};
