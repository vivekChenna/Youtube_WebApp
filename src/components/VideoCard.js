import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  const { viewCount } = statistics;

  return (
    <div className="max-h-fit p-2 ml-5 mb-6 w-72">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="pb-2 rounded-3xl w-full"
      />
      <ul>
        <li className="font-bold text-sm pb-1">{title}</li>
        <div>
          <span className=" text-sm pr-4 font-semibold">{channelTitle}</span>
          <span className="text-sm text-gray-600">{viewCount} views</span>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
