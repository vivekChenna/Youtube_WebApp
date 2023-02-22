import React, { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

import { YouTube_Suggestion_API } from "../config/hard_coded_data";
import { cacheResults } from "../utils/searchSuggestionSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, SetSuggestions] = useState([]);

  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  const ToggleSideBar = () => {
    dispatch(toggleMenu());
  };

  const searchCache = useSelector((store) => store.Suggestion);

  /**
   * 
        * store.Suggestion will give u the empty object
        my search cache will look like
        searchCache =   {

          "iphone" : ["iphone 12","iphone 13","iphone 14"]

          }

          if the search is not present in my  Cache(object) then i will dispatch an action
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        SetSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    console.log("API CALL - ", searchQuery);
    const data = await fetch(YouTube_Suggestion_API + searchQuery);

    const response = await data.json();

    SetSuggestions(response[1]);

    dispatch(
      cacheResults({
        [searchQuery]: response[1],
      })
    );
  };

  const getData = (data) => {
    console.log(data);
  };

  return (
    <div className="grid grid-flow-col justify-between">
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

      <div className="flex justify-center col-span-10 px-20 mr-3 items-center">
        <div className=" w-full pl-36 relative">
          <input
            type="text"
            className=" w-2/3 py-2 pl-4 rounded-l-full border-1 outline-none text-lg border border-gray-400"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className=" border border-gray-400 px-5 py-2 rounded-r-full text-lg hover:bg-gray-200">
            <SearchIcon />
          </button>

          {showSuggestion && (
            <div className="absolute pl-2">
              <ul className="w-[32.5rem] border-1 bg-white shadow-xl rounded-xl">
                {suggestions.map((element) => {
                  return (
                    <li
                      className=" flex gap-2 pt-2 pb-2 hover:bg-gray-200"
                      key={element}
                      onClick={() => {
                        getData(element);
                      }}
                    >
                      <SearchIcon />
                      {element}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
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
