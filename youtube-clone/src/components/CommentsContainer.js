import React from "react";
import { comments as commentsData } from "../utils/commentDummyData";
import CommentCard from "./CommentCard";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <div className="mt-1 p-1 bg-gray-50">
      <p className="text-2xl  font-bold">Comments : </p>
      <div className="">
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
