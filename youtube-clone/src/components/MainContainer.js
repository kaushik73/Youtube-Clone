import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.config.isMenuOpen);

  return (
    <>
      <div
        className={`mr-2 px-2 flex-1 overflow-y-auto ${
          isMenuOpen ? "ml-64" : "ml-16"
        } `}
      >
        <ButtonList />
        <div className="mt-10">
          <VideoContainer />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
