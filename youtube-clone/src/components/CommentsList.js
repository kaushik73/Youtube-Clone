import React, { useState } from "react";
import CommentCard from "./CommentCard";
import { DEFAULT_COMMENT_USERNAME } from "../utils/constants";

const CommentsList = ({ comments, onCommentAdd }) => {
  const [expandedComments, setExpandedComments] = useState([]);
  const [addComment, setAddComment] = useState();

  const handleShowReplies = (index) => {
    setExpandedComments((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleAddVideoComment = (index) => {
    if (addComment.trim() === "") return;

    const newComment = {
      name: DEFAULT_COMMENT_USERNAME,
      comment: addComment,
      replies: [],
    };

    if (onCommentAdd) {
      onCommentAdd(index, newComment);
    }

    setAddComment("");
  };

  return (
    <div className="space-y-4">
      {comments.map((comment, index) => (
        <div key={index} className="bg-gray-50 p-2 rounded-md shadow-sm">
          <CommentCard comment={comment} />
          {comment.replies.length > 0 ? (
            <button
              className="ml-8 mt-1 text-sm text-blue-600 font-medium hover:underline"
              onClick={() => handleShowReplies(index)}
            >
              {expandedComments.includes(index)
                ? `Hide Replies ⬆️`
                : `View ${comment.replies.length} Replies ⬇️`}
            </button>
          ) : (
            // comment section
            <div>
              <input
                type="text"
                value={addComment}
                // ref={addComment}
                onChange={(e) => setAddComment(e.target.value)}
                className="flex-grow p-1 h-10 border w-[90%] border-gray-300 rounded-l-lg focus:border-black"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                onClick={() => handleAddVideoComment(index)}
                className="p-1 bg-slate-200 text-xl h-10 hover:text-white font-bold text-black border border-gray-300 rounded-r-lg hover:bg-black"
              >
                ➤
              </button>
            </div>
          )}
          {expandedComments.includes(index) && (
            <div className="ml-8 mt-2">
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
