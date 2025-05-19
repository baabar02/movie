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
    <div className="absolute mt-[-80px] left-[400px]  flex flex-col items-center">
      {!showPlayer ? (
        <button
          onClick={() => setShowPlayer(true)}
          className="flex items-center gap-2 text-white bg-yellow-400 hover:bg-red-600 px-4 py-2 rounded-full transition"
        >
          <PlayCircle className="" />
          Watch Trailer
        </button>
      ) : (
        <div className="absolute left-[-70px] mt-[-348px]  rounded-lg h-[428px] w-[750px] overflow-hidden shadow-md">
          <iframe
            className="h-full w-full"
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
