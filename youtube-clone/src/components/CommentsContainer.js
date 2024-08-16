import React, { useState } from "react";
import { comments as commentsData } from "../utils/commentDummyData";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const [comments, setComments] = useState(commentsData);
  const handleCommentAdd = (index, newComment) => {
    const updatedComments = [...commentsData];
    updatedComments[index].replies.push(newComment);
    setComments(updatedComments);
  };
  return (
    <div className="mt-1 p-1 bg-gray-50">
      <p className="text-2xl  font-bold">Comments : </p>
      <div className="">
        <CommentsList comments={comments} onCommentAdd={handleCommentAdd} />
      </div>
    </div>
  );
};

export default CommentsContainer;
