import React, { useEffect } from "react";
import Header from "./Header";
import { API_NOW_PLAYING } from "../utils/constantUrl";
import { useDispatch } from "react-redux";
import { setNowPlaying } from "../utils/movieSlice";
const Browser = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_NOW_PLAYING
    );
    const json = await data.json();
    console.log(json);
    // dispatch({
    //   setNowPlaying(json),
    // });
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return (
    <div className="flex ">
      <Header />
    </div>
  );
};

export default Browser;
