import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const ToggleSideBar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col justify-between shadow-lg">
      <div className="flex col-span-1 items-center">
        {/* <img src={HamburgerLogo} className=" w-5 h-5 mr-2" alt="menu" /> */}
        <MenuRoundedIcon
          className="mr-3 ml-4 cursor-pointer"
          onClick={() => {
            ToggleSideBar();
          }}
        />
        <a href="/">
          <img
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="youtube"
            className=" h-20 max-w-md cursor-pointer"
          />
        </a>
        <p className=" pb-6 pr-1 text-sm font-medium text-gray-600">IN</p>
      </div>

      <div className="flex justify-center col-span-10 px-20 items-center">
        <input
          type="text"
          className=" w-1/2 py-2 pl-3 rounded-l-full border-1 outline-none text-lg border border-gray-400"
          placeholder="search"
        />
        <button className=" border border-gray-400 px-5 py-2 rounded-r-full text-lg hover:bg-gray-200">
          <SearchIcon />
        </button>
      </div>

      <div className="flex col-span-1  items-center pr-14">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="user"
          className="w-8"
        />
      </div>
    </div>
  );
};

export default Header;
