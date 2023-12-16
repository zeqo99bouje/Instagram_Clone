import React, { useState } from 'react';
import './NouvellePost.css';
import StoriesNavbar from '../StoriesNavbar/StoriesNavbar';

const NouvellePost = ({ onAddPost }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [username, setUsername] = useState('Boujenoui zakaria');
  const [caption, setCaption] = useState('');
  const [formValid, setFormValid] = useState(true);
  const [isPostSuccess, setIsPostSuccess] = useState(false);

  const handleAddPost = () => {
    if (imageUrl.trim() === '' || username.trim() === '' || caption.trim() === '') {
      setFormValid(false);
      return;
    }

    const newPost = {
      userAvatar: `https://media.licdn.com/dms/image/D5603AQHafJjEx9bUHw/profile-displayphoto-shrink_800_800/0/1696279568560?e=1706140800&v=beta&t=ZHy61rBJZfcRpgBNAaNox2HMU5-48xCXjpHHIH4gQKM`,
      username,
      image: imageUrl,
      caption,
      likes: 0,
    };

    onAddPost(newPost);

    setImageUrl('');
    setUsername('');
    setCaption('');
    setFormValid(true);
    setIsPostSuccess(true);

    // Reset success alert after a certain time (e.g., 3 seconds)
    setTimeout(() => {
      setIsPostSuccess(false);
    }, 3000);
  };

  return (
    <div>
      <StoriesNavbar />
    <div className="container">
      <div className="card w-100 bg-dark">
        <div className="card-body">
          <h2 className="card-title text-center">Add a New Post</h2>
          {!formValid && (
            <div className="alert alert-danger" role="alert">
              All fields are required.
            </div>
          )}
          {isPostSuccess && (
            <div className="alert alert-success" role="alert">
              The post is posted.
            </div>
          )}
          <form>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                Image URL:
              </label>
              <input
                type="text"
                className="form-control bg-dark text-white"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control bg-dark text-white"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="caption" className="form-label">
                Caption:
              </label>
              <textarea
                className="form-control bg-dark text-white"
                id="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-success w-100" onClick={handleAddPost}>
              Share Post
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NouvellePost;
