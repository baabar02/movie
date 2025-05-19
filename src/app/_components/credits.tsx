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
        setDirector(crew.splice(0,1));
        console.log(cast, crew, "cast, crew");
      } catch (error) {
        console.error("Error fetching movie:", error);
        // setMovie(null);
      } 
    };
    fetchData();
  }, []);

  return (
    <div className="mt-[10px] gap-[10px]">
    <div className="flex flex-row gap-5 border-b-2 content-center">
        <h2 className="text-sm sm:text-xl font-bold mb-4">Director</h2>
     {director.map((person) => {
        
        // const findOne = person.job.toLowerCase().includes("director");
        return (
          <p key={person.id}
          className="text-sm sm:text-xl left-[20px]">
           {person.name} {/* {person.job.toLowerCase().includes(  "Screenplay") && `${person.name}`} */}
          </p>
        );
      })}
    </div>
    
    
      <div className="flex flex-row mt-5 gap-5 border-b-2 content-center">
        <h1 className="text-sm sm:text-xl font-bold mb-4">Writers</h1>
          {crew.map((person) => (
        <p key={person.id}
        className="text-sm sm:text-xl left-[20px]">
          {person.name} 
        </p>
      ))}
      </div>
    <div className="flex flex-row mt-5 gap-5 border-b-2 content-center">
 <h1 className="text-sm sm:text-xl font-bold mb-4">Cast</h1>
      {cast.map((person) => (
        <p key={person.id}
        className="text-sm sm:text-xl left-[20px]">
          {person.name}
        </p>
      ))}
    </div>
     
    </div>
  );
};
