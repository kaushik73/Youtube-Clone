import React from "react";
import VideoCard, { BorderedVideoCard } from "./VideoCard";
import useFetchVideos from "../hooks/useFetchVideosToShow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setSearchText,
  clearSearchSuggestions,
} from "../utils/store/searchSlice";

const VideoContainer = () => {
  console.log("Jalc");
  const { videoData: videos, isLoading, error } = useFetchVideos();
  // const searchText = useSelector((store) => store.search.searchText)
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      console.log("clarning the text");

      dispatch(setSearchText(""));
      // dispatch(clearSearchSuggestions());
    };
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!videos || videos.length === 0) return <p>No videos available</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-auto">
      {videos[0] && <BorderedVideoCard key="345678654" video={videos[0]} />}
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
