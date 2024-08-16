import React from "react";
import VideoCard from "./VideoCard";
import useFetchVideos from "../hooks/useFetchVideosToShow";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSearchText } from "../utils/store/searchSlice";
import AdCard from "./AdCard";
import { adCardData } from "../utils/AdCardDummyData";

const VideoContainer = () => {
  const { videoData: videos, isLoading, error } = useFetchVideos();
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchText(""));
    };
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!videos || videos.length === 0) return <p>No videos available</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-auto">
      {adCardData && <AdCard key={adCardData.id} video={adCardData} />}
      {videos.map((video) => {
        const videoId = video.id.videoId ? video.id.videoId : video.id;
        return <VideoCard key={videoId} video={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
