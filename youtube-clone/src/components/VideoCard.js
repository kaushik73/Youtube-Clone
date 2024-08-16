import React, { useEffect } from "react";
import tom_icon from "../images/tom.jpg";
import { getTimeDifference, getViewsNumber } from "../utils/common";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  const timeBeforeVideoPublished = getTimeDifference(snippet?.publishedAt);
  const viewsCount = getViewsNumber(statistics?.viewCount);
  const videoId = video.id.videoId ? video.id.videoId : video.id;

  useEffect(() => {
    return () => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    };
  }, []);

  return (
    <Link to={`/watch?v=${videoId}`}>
      <div className="hover:scale-[101%] shadow-2xl h-[300px] rounded-lg mt-1">
        <div className="flex flex-col ">
          <p className="relative">
            <img
              alt="thumbnail"
              src={thumbnails?.medium?.url}
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </p>

          <div className="flex mt-3 ml-1">
            <img
              src={tom_icon}
              className="w-10 h-10 rounded-full mr-3 "
              alt="user icon"
            />
            <div>
              <p className=" font-semibold text-clip  text-sm text-gray-900 hover:text-blue-600">
                {title}
              </p>
              <p className="text-gray-600 text-sm">{channelTitle}</p>
              <p className="text-gray-600 text-xs">
                {statistics?.viewCount && <span>{viewsCount} &bull;</span>}

                {timeBeforeVideoPublished}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const BorderedVideoCard = ({ video }) => {
  console.log("BorderedVideoCard");
  return (
    <div className="relative">
      {/* <span className="absolute z-10 bg-black text-white p-2 font-xl  bg-opacity-40 rounded-tl-2xl">
        Trending...
        </span> */}
      <div className="border-2 border-red-950 rounded-2xl">
        <VideoCard video={video} />
      </div>
    </div>
  );
};

export default VideoCard;
