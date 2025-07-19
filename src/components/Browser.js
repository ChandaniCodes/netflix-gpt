import React, { useEffect } from "react";
import Header from "./Header";
import { API_NOW_PLAYING } from "../utils/constant";

const Browser = () => {
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_NOW_PLAYING
    );
    const json = await data.json();
    console.log(json);
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
