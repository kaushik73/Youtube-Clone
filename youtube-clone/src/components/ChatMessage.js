import React from "react";
import userIcon from "../images/userIcon.png";

const ChatMessage = ({ message }) => {
  return (
    <div className="flex items-center overflow-hidden">
      <div>
        <img
          src={userIcon}
          alt="User Icon"
          className="min-w-10 h-10 rounded-full border border-gray-300"
        />{" "}
      </div>
      <div className="pl-1">
        <span className="font-medium text-ellipsis  overflow-hidden">
          {message?.name} :{" "}
        </span>
        <span className="truncate">{message?.message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
