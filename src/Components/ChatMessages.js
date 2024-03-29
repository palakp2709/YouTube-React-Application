import React from "react";
import { useSelector } from "react-redux";

const ChatMessages = ({ name, message }) => {
  const chgtheme = useSelector((store) => store.theme.isDarkTheme);

  return (
    <div className="flex items-center p-1 shadow-sm ">
      <i
        className={
          chgtheme ? "fa-solid fa-user text-white" : "fa-solid fa-user "
        }
      ></i>
      <span
        className={
          chgtheme
            ? "font-semibold px-2 text-xs text-white"
            : "font-bold px-2 text-xs"
        }
      >
        {name}
      </span>
      <span className={chgtheme ? "text-xs text-white" : "text-xs"}>{message}</span>
    </div>
  );
};

export default ChatMessages;
