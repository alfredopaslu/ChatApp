import React from 'react';
import '../../list/userInfo/userInfo.css';

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="avatar">User Avatar</div>
      <div className="user-details">
        <h2>User Name</h2>
        <p>Status message...</p>
      </div>
    </div>
  );
};

export default UserInfo;
