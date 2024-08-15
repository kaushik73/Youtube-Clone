import React from "react";
import tom_icon from "../images/tom.jpg";
import { getTimeDifference, getViewsNumber } from "../utils/common";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  const timeBeforeVideoPublished = getTimeDifference(snippet.publishedAt);
  const viewsCount = getViewsNumber(statistics.viewCount);
  return (
    <Link to={`/watch?v=${video.id}`}>
      <div className="flex flex-col">
        <p href="video-1.html" className="relative">
          <img
            alt="thumbnail"
            src={thumbnails?.medium?.url}
            className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        </p>

        <div className="flex mt-3">
          <img
            src={tom_icon}
            className="w-10 h-10 rounded-full mr-3 "
            alt="user icon"
          />
          <div>
            <p
              href="video-1.html"
              className="font-semibold text-sm text-gray-900 hover:text-blue-600"
            >
              {title}
            </p>
            <p className="text-gray-600 text-xs">{channelTitle}</p>
            <p className="text-gray-600 text-xs">
              {viewsCount} &bull; {timeBeforeVideoPublished}
            </p>
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
