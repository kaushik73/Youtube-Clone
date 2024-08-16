import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const fetchVideosFromAPI = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};

const useFetchVideos = () => {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const searchText = useSelector((store) => store.search.searchText);

  const fetchVideos = async () => {
    setLoading(true);
    setError(null);
    navigate("/");

    let url;
    const trimmedText = searchText.trim();
    if (trimmedText !== "" || trimmedText !== "ALL") {
      console.log("if called");
      url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${encodeURIComponent(
        searchText
      )}&type=video&key=${GOOGLE_API_KEY}`;
    } else if (trimmedText === "" || trimmedText === "ALL") {
      console.log("elsepart");
      url = YOUTUBE_VIDEO_API;
    }

    const videos = await fetchVideosFromAPI(url);
    setVideoData(videos);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, [searchText]);

  return { videoData, loading, error };
};

export default useFetchVideos;
