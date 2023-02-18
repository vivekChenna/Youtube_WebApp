import { useEffect, useState } from "react";

import VideoCard from "./VideoCard";

import { Link } from "react-router-dom";

import { YouTube_API } from "../config/hard_coded_data";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getYoutubeData();
  }, []);

  const getYoutubeData = async () => {
    const data = await fetch(YouTube_API);

    const response = await data.json();

    setVideoData(response.items);
  };

  return (
    <div className="ml-1 mt-4 flex justify-evenly flex-wrap">
      {videoData.map((data) => {
        return (
          <Link to={"/watch?v=" + data.id} key={data.id}>
            <VideoCard info={data} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
