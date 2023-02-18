import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";

import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.IsmenuOpen);

  // early return
  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className=" col-span-1 flex flex-col gap-4 pl-5 pt-3 shadow-lg ">
      <div>
        <ul>
          <li className="flex gap-4 items-center pb-2 pl-2 cursor-pointer hover:bg-gray-200 rounded-lg">
            <span>
              <HomeIcon />
            </span>
            <span>Home</span>
          </li>

          <li className="flex gap-4 items-center pb-2  pl-2  cursor-pointer  hover:bg-gray-200 rounded-lg">
            <span>
              <AppShortcutOutlinedIcon />
            </span>
            <span>Shorts</span>
          </li>

          <li className="flex gap-4 items-center cursor-pointer  pl-2   hover:bg-gray-200 rounded-lg">
            <span>
              <SubscriptionsIcon />
            </span>
            <span>Subscriptions</span>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <ul>
          <li className="flex gap-4 items-center pb-2 cursor-pointer  pl-2   hover:bg-gray-200 rounded-lg">
            <span>
              <VideoLibraryOutlinedIcon />
            </span>
            <span>Library</span>
          </li>
          <li className="flex gap-4 items-center pb-2 cursor-pointer  pl-2   hover:bg-gray-200 rounded-lg">
            <span>
              <HistoryOutlinedIcon />
            </span>
            <span>History</span>
          </li>
          <li className="flex gap-4 items-center pb-2 cursor-pointer  pl-2   hover:bg-gray-200 rounded-lg">
            <span>
              <OndemandVideoSharpIcon />
            </span>
            <span>Watch Later</span>
          </li>

          <li className="flex gap-4 items-center pb-2 cursor-pointer  pl-2   hover:bg-gray-200 rounded-lg">
            <span>
              <WatchLaterOutlinedIcon />
            </span>
            <span>Watch Later</span>
          </li>

          <li className="flex gap-4 items-center cursor-pointer  pl-2   hover:bg-gray-200 rounded-lg">
            <span>
              <ThumbUpOutlinedIcon />
            </span>
            <span>Liked Videos</span>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h1 className="pb-2 font-bold">Subscriptions</h1>
        <ul>
          <li className="flex gap-4 items-center pb-2 cursor-pointer  pl-2   hover:bg-gray-200 rounded-lg">
            <span>
              <AudiotrackOutlinedIcon />
            </span>
            <span>Music</span>
          </li>

          <li className="flex gap-4 items-center pb-2 cursor-pointer  pl-2   hover:bg-gray-200 rounded-lg">
            <span>
              <EmojiEventsOutlinedIcon />
            </span>
            <span>Sports</span>
          </li>

          <li className="flex gap-4 items-center cursor-pointer  pl-2   hover:bg-gray-200 rounded-lg">
            <span>
              <SportsEsportsOutlinedIcon />
            </span>
            <span>Gaming</span>
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h1 className="font-bold pb-2">Explore</h1>
        <ul>
          <li className="flex gap-4 items-center pb-2 cursor-pointer  hover:bg-gray-200 rounded-lg">
            <span>
              <LocalFireDepartmentOutlinedIcon />
            </span>
            <span>Trending</span>
          </li>

          <li className="flex gap-4 items-center pb-2 cursor-pointer  hover:bg-gray-200 rounded-lg">
            <span>
              <AudiotrackOutlinedIcon />
            </span>
            <span>Music</span>
          </li>

          <li className="flex gap-4 items-center pb-2 cursor-pointer  hover:bg-gray-200 rounded-lg">
            <span>
              <MovieOutlinedIcon />
            </span>
            <span>Movies</span>
          </li>

          <li className="flex gap-4 items-center cursor-pointer  hover:bg-gray-200 rounded-lg">
            <span>
              <NewspaperOutlinedIcon />
            </span>
            <span>News</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
