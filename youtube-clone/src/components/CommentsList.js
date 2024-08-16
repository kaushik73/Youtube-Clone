import React, { useState } from "react";
import CommentCard from "./CommentCard";

const CommentsList = ({ comments }) => {
  const [expandedComments, setExpandedComments] = useState([]);

  const handleShowReplies = (index) => {
    setExpandedComments((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-4">
      {comments.map((comment, index) => (
        <div key={index} className="bg-gray-50 p-2 rounded-md shadow-sm">
          <CommentCard comment={comment} />
          {comment.replies.length > 0 && (
            <button
              className="ml-8 mt-1 text-sm text-blue-600 font-medium hover:underline"
              onClick={() => handleShowReplies(index)}
            >
              {expandedComments.includes(index)
                ? `Hide Replies ⬆️`
                : `View ${comment.replies.length} Replies ⬇️`}
            </button>
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
