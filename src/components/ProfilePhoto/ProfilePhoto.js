import React from 'react';
import './ProfilePhoto.css';

const ProfilePhoto = ({ className = '', size = 'large' }) => {
  return (
    <div className={`profile-photo ${size} ${className}`}>
      <img 
        // In ProfilePhoto.js, change this line:
        src={`${process.env.PUBLIC_URL}/assets/images/profile.png`}
//                                                    ↑ change to .png
        alt="Abhishek Kumar - Software Developer"
        loading="lazy"
      />
      <div className="photo-glow"></div>
    </div>
  );
};

export default ProfilePhoto;