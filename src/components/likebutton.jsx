import React from "react";
import "../App.css";

const LikeButton = ({ isLiked, onLikeToggle }) => {
  return (
    <button
      onClick={onLikeToggle}
      className={`like-button ${isLiked ? "liked" : "not-liked"}`}
    >
      {isLiked ? "Liked ❤️" : "Like ♡"}
    </button>
  );
};

export default LikeButton;
