import { useState, useEffect, useCallback } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

const useGetTrendingVideos = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getYoutubeData = useCallback(async () => {
    try {
      setIsLoading(true);
      console.log("API called - getYoutubeData");
      const response = await fetch(YOUTUBE_VIDEO_API);
      const json = await response.json();
      setData(json.items);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getYoutubeData();
  }, [getYoutubeData]);

  return { data, isLoading, error };
};

export default useGetTrendingVideos;
