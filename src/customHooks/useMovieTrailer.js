import React, { useEffect } from "react";
import { API_NOW_PLAYING } from "../utils/constantUrl";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_NOW_PLAYING
    );
    const json = await data.json();
    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
