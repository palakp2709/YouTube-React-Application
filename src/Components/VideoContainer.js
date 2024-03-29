import React, { useEffect, useState } from "react";
 import { YOUTUBE_VIDEOS_URL } from "../utils/constant";
import VideoCard from "./VIdeoCard";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL+process.env.REACT_APP_GOOGLE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };

  return videos === "" ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap m-2 ">
      {/* {videos[0] && <AdVideoCard info={videos[0]}/>} */}

      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
