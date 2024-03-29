import React from "react";
import { useSelector } from "react-redux";

const VideoCard = (props) => {
  const { info } = props;

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  const chgtheme = useSelector((store) => store.theme.isDarkTheme);

  return (
    <div className=" shadow-md rounded-md w-60 ml-8  mt-2">
      <img
        className="rounded-lg  "
        src={thumbnails.medium.url}
        alt="video-img"
      />

      <div className="p-2">
        <p
          className={
            chgtheme
              ? "font-bold text-sm text-white"
              : "font-bold text-sm text-black"
          }
        >
          {channelTitle}
        </p>
        <p
          className={
            chgtheme
              ? "text-xs font-medium mt-1 truncate text-white"
              : "text-xs font-medium mt-1 truncate text-black"
          }
        >
          {title}
        </p>
        <p
          className={
            chgtheme
              ? "text-xs text-gray-400 mt-1 "
              : "text-xs text-gray-500 mt-1 "
          }
        >
          {statistics.viewCount} views
        </p>
      </div>
    </div>
  );
};

// export const AdVideoCard = ({ info }) => {
//   return (
//     <div className="border boder-solid border-red-500">
//       <VideoCard info={info} />
//     </div>
//   );
// };

export default VideoCard;
