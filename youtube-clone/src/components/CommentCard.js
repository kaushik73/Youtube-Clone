import React from "react";
import userIcon from "../images/userIcon.png";

const CommentCard = ({ comment }) => {
  return (
    <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg shadow-sm bg-white mb-2">
      <div className="w-10 h-10">
        <img
          src={userIcon}
          alt="User Icon"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-gray-800">
          <span className="text-gray-600">Name:</span> {comment?.name}
        </p>
        <p className="mt-1 text-gray-700 text-ellipsis  overflow-hidden">
          <span className="text-gray-600 text-ellipsis  overflow-hidden">
            Comment:
          </span>{" "}
          {comment?.comment}
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
