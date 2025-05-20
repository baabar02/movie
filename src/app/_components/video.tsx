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
    <div className="relative flex flex-col items-center w-full max-w-[760px]  mx-auto">
      {/* "absolute mt-[-60px] left-5 sm:absolute sm:mt-[-80px] sm:left-[400px]  flex flex-col items-center" */}

      {!showPlayer ? (
        <button
          onClick={() => setShowPlayer(true)}
          className="flex items-center mt-[-60px] sm:mt-[-80px] left-[-40px] sm:left-[-100px] gap-2 text-white bg-transparent hover:bg-red-600 px-4 py-2 rounded-full transition duration-300"
        >
          <PlayCircle className="" />
          Watch Trailer
        </button>
      ) : (
        <div className="absolute w-full mt-[-283px] sm:mt-[-428px] rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-[283px] sm:h-[428px]"
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
