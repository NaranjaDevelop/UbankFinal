import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = () => {
  return (
    <div className="headerContainer">
      <img 
        src="https://via.placeholder.com/100" 
        alt="Profile" 
        className="profileImage" 
      />
      <button className="connectButton">Connect to LinkedIn</button>
      <button className="editButton">Edit</button>
    </div>
  );
};

export default ProfileHeader;