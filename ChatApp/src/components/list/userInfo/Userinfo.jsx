import { useState, useRef } from "react";
import "./userInfo.css";

const UserInfo = (props) => {

  return (
    <div className='userInfo'>
      <div className="user">
        <input
          type="file"
          accept="image/*"
          onChange={props.changeUserImage}
          style={{ display: 'none' }}
          ref={props.fileInputRef}
        />
        <img
          src={props.myUserImage}
          alt="mi Avatar"
          onClick={() => props.fileInputRef.current.click()}
        />
        <h2>UserInfo</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="more" />
        <img src="./video.png" alt="video" />
        <img src="./edit.png" alt="edit" />
      </div>
    </div>
  );
};

export default UserInfo;