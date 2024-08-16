import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../utils/store/searchSlice";

const ButtonCard = ({ content }) => {
  const dispatch = useDispatch();
  const searchText = useSelector((store) => store.search.searchText);
  const handleButtonClick = () => {
    dispatch(setSearchText(content));
  };
  return (
    <div className="inline">
      {" "}
      <button
        onClick={handleButtonClick}
        className={`${
          searchText === content
            ? "bg-red-600 hover:bg-red-700"
            : "bg-slate-200 hover:bg-slate-300"
        } p-1 px-3 font-semibold text-lg  rounded-lg border-r-2 inline whitespace-nowrap`}
      >
        {content}
      </button>
    </div>
  );
};

export default ButtonCard;
