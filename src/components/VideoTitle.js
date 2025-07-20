import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-5xl">{title}</h1>
      <p className="w-1/3 ">{description}</p>
      <div>
        <button className="bg-gray-500 rounded px-8 py-2 mr-3 text-white btn opacity-50">
          Play ▶
        </button>
        <button className="bg-gray-500 rounded px-8 py-2  text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
