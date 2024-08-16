import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/store/configSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

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
        isMenuOpen ? "ml-64" : "ml-16"
      }`}
    >
      <div className="flex">
        <div className="bg-red-900 p-4 w-[75%] h-[40%]">
          <iframe
            className=""
            width="800"
            height="400"
            src={`https://www.youtube.com/embed/${youtubeLinkId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative">
          <LiveChat />
        </div>
      </div>

      <div className="w-[75%]">
        <CommentsContainer />
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
