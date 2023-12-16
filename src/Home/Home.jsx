// Home.jsx

import React, { useState } from 'react';
import './Home.css';
import StoriesNavbar from '../StoriesNavbar/StoriesNavbar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Home = ({ posts }) => {
  const [likes, setLikes] = useState(posts.map((post) => post.likes || 0));
  const [comments, setComments] = useState(posts.map(() => []));
  const [newComments, setNewComments] = useState(posts.map(() => ''));

  const handleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index]++;
      return newLikes;
    });
  };

  const handleAddComment = (index) => {
    if (newComments[index].trim() !== '') {
      setComments((prevComments) => {
        const newCommentsArray = [...prevComments];
        newCommentsArray[index] = [...newCommentsArray[index], newComments[index]];
        return newCommentsArray;
      });
      setNewComments((prevNewComments) => {
        const newNewCommentsArray = [...prevNewComments];
        newNewCommentsArray[index] = '';
        return newNewCommentsArray;
      });
    }
  };

  return (
    <div>
      <StoriesNavbar />
      <div className="centered-container">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <div className="post-header">
              <img src={post.userAvatar} alt="User Avatar" className="user-avatar" />
              <span className="username">{post.username}</span>
            </div>
            <img src={post.image} alt="Post" className="post-image" />
            <div className="post-actions">
              <button onClick={() => handleLike(index)} className="like-button">
                <FavoriteIcon style={{ color: 'red' }} /> {likes[index]}
              </button>
              <button className="comment-button">
                <ChatBubbleOutlineIcon /> {comments[index].length}
              </button>
            </div>
            <div className="post-details">
              <span className="username">{post.username}</span>
              <span className="caption">{post.caption}</span>
            </div>
            <div className="comments">
              {comments[index].map((comment, commentIndex) => (
                <div key={commentIndex} className="comment">
                  <span className="comment-username">{post.username}</span>
                  <span className="comment-text">{comment}</span>
                </div>
              ))}
            </div>
            <div className="add-comment">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComments[index]}
                onChange={(e) => {
                  const newNewCommentsArray = [...newComments];
                  newNewCommentsArray[index] = e.target.value;
                  setNewComments(newNewCommentsArray);
                }}
              />
              <button onClick={() => handleAddComment(index)}>Post</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
