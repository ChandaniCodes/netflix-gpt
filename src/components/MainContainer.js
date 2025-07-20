import React from "react";
import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  //   movies is null then retun null - both means same
  if (movies === null) return null;
  //   if (!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default MainContainer;
