import React from "react";
import ChatMessage from "./ChatMessage";
import {
  generateRandomMessage,
  generateRandomNames,
} from "../utils/helperLiveChat";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store/liveMessageSlice";
import { DEFAULT_LIVE_COMMENT_USERNAME } from "../utils/constants";
import { useRef } from "react";

const LiveChat = () => {
  const dispatch = useDispatch();
  const message = useRef();
  const messages = useSelector((store) => store.liveMessage.message);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessage(),
        })
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleAddLiveComment = () => {
    dispatch(
      addMessage({
        name: DEFAULT_LIVE_COMMENT_USERNAME,
        message: message.current.value,
      })
    );
    message.current.value = "";
  };

  return (
    <div className="relative bg-slate-200 ml-1 px-2 h-[420px] w-[400px] border border-black overflow-y-auto rounded-lg shadow-lg">
      <div className="flex flex-col-reverse space-y-2 space-y-reverse min-h-[370px] ">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>

      <div className="sticky bottom-0 my-0 flex items-center w-full bg-slate-200 p-1">
        <input
          type="text"
          ref={message}
          className="flex-grow p-2 h-10 border border-gray-300 rounded-l-lg focus:border-black"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          onClick={handleAddLiveComment}
          className="p-1 bg-slate-200 text-xl h-10 hover:text-white font-bold text-black border border-gray-300 rounded-r-lg hover:bg-black"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
