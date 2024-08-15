import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/store/configSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const youtubeLinkId = searchParams.get("v");
  const isMenuOpen = useSelector((store) => store.config.isMenuOpen);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div
      className={`mr-2 px-2 flex-1 overflow-y-auto ${
        false ? "ml-64" : "ml-16"
      } `}
    >
      <div className="bg-red-900 min-w-[60%] min-h-[40%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeLinkId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;

/*
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/store/configSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const isMenuOpen = useSelector((store) => store.config.isMenuOpen);
  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div
      className={`mr-2 px-2 flex-1 overflow-y-auto${
        false ? "ml-640" : "ml-16"
      } bg-red-900 `}
    >
      <div>
        <iframe
          width="600px"
          height="300px"
          src="https://www.youtube.com/embed/kyjg5kX4pT0?si=i0pN7OqFZhR5brQN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
*/
