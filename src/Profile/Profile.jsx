
import React from 'react';
import './Profile.css';

const Profile = ({ posts, followersCount, followingCount }) => {

  const currentUser = 'Boujenoui zakaria';
  const userPosts = posts.filter((post) => post.username === currentUser);
  const totalPosts = userPosts.length;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={userPosts[0].userAvatar} alt="User Avatar" className="profile-avatar" />
        <div className="profile-info">
          <h2 className="profile-username">{userPosts[0].username}</h2>
          <p className="profile-bio">
            𝘈𝘱𝘱𝘳𝘦𝘯𝘥𝘴 𝘥’𝘩𝘪𝘦𝘳, 𝘷𝘪𝘴 𝘱𝘰𝘶𝘳 𝘢𝘶𝘫𝘰𝘶𝘳𝘥’𝘩𝘶𝘪 𝘦𝘵 𝘦𝘴𝘱𝘦̀𝘳𝘦 𝘱𝘰𝘶𝘳 𝘥𝘦𝘮𝘢𝘪𝘯
            <br />
            @rcaofficiel
            <br />
            @acmilan.
          </p>
          <div className="profile-stats">
            <div className="profile-followers">
              <span className="stats-count">{followersCount} </span>
              <span className="label">Followers</span>
            </div>
            <div className="profile-following">
              <span className="stats-count">{followingCount} </span>
              <span className="label">Following</span>
            </div>
            <div className="profile-publications">
              <span className="stats-count">{totalPosts} </span>
              <span className="label">Publications</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-posts">
        {userPosts.map((post, index) => (
          <div key={index} className="profile-post">
            <img src={post.image} alt={`Post ${index}`} className="profile-post-image" />
          </div>
        ))}
      </div>

      {/* Shared photos section */}
      <div className="shared-photos-section">
        <h3 className="shared-photos-title">Shared Photos</h3>
        <p className="shared-photos-description">
          When you share photos, they appear on your profile.
        </p>
      </div>
    </div>
  );
};

export default Profile;
