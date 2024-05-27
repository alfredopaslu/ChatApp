import React, { useState } from "react";
import "./chatList.css";

const ChatList = ({ chat, updateChat, onSelectUser }) => {
  const handleUserClick = () => {
    updateChat(chat);
  };

  return (
    
    <div className="chatList">
       
      {/* Resto del código */}
      <div className="item" key={chat.user_id} onClick={handleUserClick}>
        <img src={chat.avatar} alt="" />
        <div className="texts">
          <span>{chat.full_name}</span>
          <p>Último mensaje</p> {/* Mostrar el último mensaje aquí */}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
