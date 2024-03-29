import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { changeTheme } from "../utils/themeSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const chgtheme = useSelector((store) => store.theme.isDarkTheme);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    //unmounting;
    return () => {
      clearTimeout(timer);
    };
    
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
  //  console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handletheme = () => {
    dispatch(changeTheme());
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-lg items-center ">
      <div className="flex col-span-1  items-center ">
        <i
          className={
            chgtheme
              ? "fa-solid fa-bars text-gray-200 mx-2"
              : "fa-solid fa-bars text-black mx-2"
          }
          onClick={() => toggleMenuHandler()}
        ></i>

        <Link to="/">
          <div
            className={
              chgtheme ? "font-semibold text-white" : "font-semibold text-black"
            }
          >
            <i className="fa-brands fa-youtube text-red-700 mx-2"></i>
            YouTube
          </div>
        </Link>
      </div>

      <div className="col-span-10 ml-28">
        <div className="flex mt-2 px-4">
          <input
            className={
              chgtheme
                ? "h-8 w-1/2 border-l border-y  border-gray-400 bg-gray-800 rounded-l-full p-2 text-white"
                : "h-8 w-1/2 border-l border-y  border-gray-400 rounded-l-full p-2"
            }
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder="Search"
          />
          <button
            className={
              chgtheme
                ? "h-8  border-r border-y  border-gray-400 bg-gray-800 rounded-r-full px-2 "
                : "h-8   border-r border-y  border-gray-400  rounded-r-full px-2 "
            }
          >
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white w-[21rem] rounded-lg border-gray-400 shadow-lg">
            <ul>
              {suggestions.map((s) => (
                <li className="p-1 text-xs pl-4 hover:bg-gray-200" key={s}>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <button
          className={
            chgtheme
              ? "mx-3 border border-gray-400 p-1 rounded-md text-white"
              : "mx-3 border border-gray-400 p-1 rounded-md text-black"
          }
          onClick={handletheme}
        >
          Light Theme
        </button>
      </div>
    </div>
  );
};

export default Head;
