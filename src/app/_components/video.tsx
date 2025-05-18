

import { useEffect, useState } from "react";
import { getVideoApi } from "../hooks/get-video-api";
import { PlayCircle } from "lucide-react";

type VideoProps = {
  movieId: string;
};

export const Video = ({ movieId }: VideoProps) => {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await getVideoApi(movieId);
      const trailer = response?.results?.find(
        (vid: any) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      if (trailer) setTrailerKey(trailer.key);
    };
    fetchVideo();
  }, [movieId]);

  if (!trailerKey) return null;

  return (
    <div className="absolute mt-80 left-[-20px] w-full flex flex-col items-center">
      {!showPlayer ? (
        <button
          onClick={() => setShowPlayer(true)}
          className="flex items-center gap-2 text-white bg-transparent hover:bg-red-600 px-4 py-2 rounded-full transition"
        >
          <PlayCircle className=" w-5 h-5" />
          Watch Trailer
        </button>
      ) : (
        <div className=" w-full rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};
