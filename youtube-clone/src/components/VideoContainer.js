import React from "react";
import useGetTrendingVideos from "../hooks/useGetTrendingVideos";
import VideoCard, { BorderedVideoCard } from "./VideoCard";

const VideoContainer = () => {
  const { data: videos, isLoading, error } = useGetTrendingVideos();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!videos || videos.length === 0) return <p>No videos available</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-auto z-1">
      {videos[0] && <BorderedVideoCard video={videos[0]} />}
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
