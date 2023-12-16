// StoriesNavbar.jsx
import React from 'react';
import './StoriesNavbar.css';

const StoriesNavbar = () => {
  const stories = Array.from({ length: 21}).map((_, index) => ({
    id: index + 1,
    userAvatar: `https://picsum.photos/50?random=${index}`,
  }));

  return (
    <div className="stories-navbar">
      {stories.map((story) => (
        <div key={story.id} className="story">
          <img src={story.userAvatar} alt={`Story ${story.id}`} className="story-avatar" />
        </div>
      ))}
    </div>
  );
};

export default StoriesNavbar;
