import React from "react";
import { useSelector } from "react-redux";

const Button = ({ list }) => {
  const chgtheme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div>
      <button
        className={
          chgtheme
            ? "bg-gray-700 p-1 px-3 m-2 rounded-lg mx-3 text-white"
            : "bg-gray-100 p-1 px-3 m-2 rounded-lg mx-3 text-black"
        }
      >
        {list}
      </button>
    </div>
  );
};

export default Button;
