import { useEffect, useState } from "react";
import { getVideoApi } from "../hooks/get-video-api";
import { useRouter } from "next/router";

type MovieVideoResponse = {
  title: string;
  image: string;
  vote: string | number;
  id: string;
};

interface PageProps {
  params: {
    id: string;
  };
}

export const Video = () => {
  const [videos, setVideos] = useState<MovieVideoResponse[]>([]);

  useEffect(() => {
    const videoPlay = async () => {
      const response = await getVideoApi();
      const firstTen = response?.results.splice(0);
      setVideos(firstTen);
    };
    videoPlay();
  }, []);

  const router = useRouter();
  const routerHandle = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      Video
      {/* {videos.map((el,index)=>{
                <Video/>
            })} */}
    </div>
  );
};

// ("use client");

// import { getMovieId } from "@/app/hooks/get-id-api";
// import { MovieDetails } from "@/types";

// type MovieDetailProps = {
//   movieId: string;
// };

// export const MovieDetail = ({ movieId }: MovieDetailProps) => {
//   const [movie, setMovie] = useState<MovieDetails>();

//   useEffect(() => {
//     const getMovie = async () => {
//       const response = await getMovieId(movieId);
//       setMovie(response);
//     };

//     getMovie();
//   }, []);

//   return (
//     <div>
//       <h1>{movie?.overview}</h1>
//       <img
//         width="100%"
//         height={200}
//         // src={TMDB_IMAGE_SERVICE_URL + movie?.poster_path}
//       />
//     </div>
//   );
// };
