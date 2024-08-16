import React, { useEffect } from "react";
import userIcon from "../images/userIcon.png";
import { getTimeDifference, getViewsNumber } from "../utils/common";
import { Link } from "react-router-dom";
const VideoCard = ({ video, profilePicture, isAdd }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  const timeBeforeVideoPublished = getTimeDifference(snippet?.publishedAt);
  const viewsCount = getViewsNumber(statistics?.viewCount);
  const imageSrc = thumbnails?.medium?.url;
  const videoId = video.id.videoId ? video.id.videoId : video.id;

  useEffect(() => {
    return () => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    };
  }, []);
  console.log(video.navigateTo, "video.navigateTo");
  return (
    <Link to={isAdd ? `/${video.navigateTo}` : `/watch?v=${videoId}`}>
      <div className="hover:scale-[101%] shadow-2xl h-[300px] rounded-lg mt-0">
        <div className="flex flex-col ">
          <p className="relative">
            <img
              alt="thumbnail"
              src={imageSrc}
              className="w-full h-40 rounded-t-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </p>

          <div className="flex mt-3 ml-1">
            <img
              src={isAdd ? profilePicture : userIcon}
              className="w-10 h-10 rounded-full mr-3 object-contain"
              alt="user icon"
            />
            <div>
              <p className=" font-semibold text-clip  text-sm text-gray-900 hover:text-blue-600 px-1">
                {title}
              </p>
              <p className="text-gray-600 text-sm">{channelTitle}</p>
              <p className="text-gray-600 text-xs">
                {statistics?.viewCount && <span>{viewsCount} &bull; </span>}

                {timeBeforeVideoPublished}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
