// 1087192

import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBg = ({ movieId }) => {
  useMovieTrailer({ movieId });
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBg;
