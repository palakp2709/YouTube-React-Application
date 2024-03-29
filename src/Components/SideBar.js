import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const chgtheme = useSelector((store) => store.theme.isDarkTheme);
  //Early Return
  if (!isMenuOpen) return null;

  return (
    <div className="col-span-1 shadow-lg w-40 ">
      <div
        className={
          chgtheme
            ? " border-gray-40000 border-b-2 py-4 text-white"
            : " border-gray-40000 border-b-2 py-4 text-black"
        }
      >
        <div className="px-2 py-2">
          <Link to={"/"}>
            <i className="fa-solid fa-house mx-3"></i> Home
          </Link>
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-icons mx-3  "></i>Shorts
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-circle-pause mx-3  "></i>
          Subscriptions
        </div>
      </div>

      <div
        className={
          chgtheme
            ? " border-gray-40000 border-b-2 py-4 text-white"
            : " border-gray-40000 border-b-2 py-4 text-black"
        }
      >
        <div className="px-2  py-2">
          <i className="fa-solid fa-clock mx-3"></i> History
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-clock mx-3"></i>Watch Later
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-thumbs-up mx-3"></i>
          Liked Videos
        </div>
      </div>

      <div className={chgtheme ? " text-white" : "  text-black"}>
        <div className="px-2  py-2">
          <i className="fa-solid fa-fire mx-3"></i> Trending
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-basket-shopping mx-3"></i>Shopping
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-music mx-3"></i> Music
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-film mx-3"></i>Movies
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-satellite-dish mx-3"></i>Live
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-gamepad mx-3"></i>Gaming
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-newspaper mx-3"></i>News
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-trophy mx-3"></i>Sports
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-lightbulb mx-3"></i>Courses
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-glasses mx-3"></i>Fashion
        </div>
        <div className="px-2  py-2">
          <i className="fa-solid fa-tower-cell mx-3"></i>Podcasts
        </div>
      </div>
    </div>
  );
};

export default SideBar;
