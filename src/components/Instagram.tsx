import React from "react";

// Optional: Define props if you want this to be dynamic later
interface WidgetProps {
  username?: string;
  followers?: string;
  profileImg?: string;
}

export const Instagram: React.FC<WidgetProps> = ({
  username = "fornaxhomedevelopers",
  followers = "108K",
  profileImg = "https://via.placeholder.com/150", // Replace with your actual asset path
}) => {
  return (
    <div className="widget-container">
      {/* 1. Main Profile Card Info */}
      <div className="profile-card">
        {/* Left Side: Circular Avatar */}
        <div className="avatar-wrapper">
          <img
            src={profileImg}
            alt={`${username} profile`}
            className="profile-avatar"
          />
        </div>

        {/* Middle Side: Profile Text & Buttons */}
        <div className="profile-details">
          <h2 className="username">{username}</h2>
          <span className="follower-count">
            <strong>{followers}</strong> followers
          </span>
          <div className="action-row">
            <a
              href={`https://instagram.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Profile
            </a>
            <button className="settings-icon-btn" aria-label="Settings">
              ⚙️
            </button>
          </div>
        </div>

        {/* Right Side: Platform Branding Logo */}
        <div className="brand-logo-section">
          <span className="instagram-text-logo">Instagram</span>
        </div>
      </div>

      {/* 2. Navigation Tabs Row */}
      <div className="widget-tabs">
        <button className="tab-item active">
          <span>🔳</span> POSTS
        </button>
        <button className="tab-item">
          <span>🎬</span> REELS
        </button>
        <button className="tab-item">
          <span>🔖</span> SAVED
        </button>
        <button className="tab-item">
          <span>👤</span> TAGGED
        </button>
      </div>
    </div>
  );
};
