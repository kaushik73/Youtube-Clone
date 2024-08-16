import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeMenu,
  disableModal,
  enableModal,
} from "../utils/store/configSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import HireMeModal from "./HireMeModal";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const youtubeLinkId = searchParams.get("v");
  const [isModelOpen, setIsModalOpen] = useState(false);
  const isMenuOpen = useSelector((store) => store.config.isMenuOpen);

  useEffect(() => {
    dispatch(closeMenu());

    const modalTimer = setTimeout(() => {
      setIsModalOpen(true);
      dispatch(enableModal());
    }, 3000);

    return () => {
      clearTimeout(modalTimer);
      dispatch(disableModal());
    };
  }, []);

  return (
    <>
      {isModelOpen && <HireMeModal />}

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
    </>
  );
};

export default WatchPage;
