import React, { useState } from "react";
import LikeButton from "./LikeButton";
import "../App.css";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <div className="post-card">
      <div className="header">
        <img src={post.profileImage} alt={post.username} />
        <span className="username">{post.username}</span>
      </div>
      <p>{post.content}</p>
      <LikeButton isLiked={liked} onLikeToggle={handleLikeToggle} />
    </div>
  );
};
export default PostCard;