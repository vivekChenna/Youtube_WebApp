import { useEffect } from "react";

import { YouTube_API } from "../config/hard_coded_data";

const VideoContainer = () => {
  useEffect(() => {
    getYoutubeData();
  }, []);

  const getYoutubeData = async () => {
    const data = await fetch(YouTube_API);

    const response = await data.json();

    console.log(response.items);
  };

  return (
    <div>
      <h1>hye</h1>
    </div>
  );
};

export default VideoContainer;
