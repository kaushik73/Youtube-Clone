import React from "react";

const ButtonCard = ({ content }) => {
  return (
    <div>
      {" "}
      <button className="p-1 px-3 font-semibold text-lg bg-slate-200 hover:bg-slate-300 rounded-lg border-r-2">
        {content}
      </button>
    </div>
  );
};

export default ButtonCard;
