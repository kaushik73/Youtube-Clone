import React from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../utils/store/searchSlice";

const ButtonCard = ({ content }) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(setSearchText(content));
  };
  return (
    <div>
      {" "}
      <button
        // data-carousel-item
        onClick={handleButtonClick}
        className="p-1 px-3 font-semibold text-lg bg-slate-200 hover:bg-slate-300 rounded-lg border-r-2"
      >
        {content}
      </button>
    </div>
  );
};

export default ButtonCard;
