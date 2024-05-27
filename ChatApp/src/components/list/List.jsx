import React from 'react';
import ChatList from './chatList/ChatList';
import UserInfo from '../list/userInfo/Userinfo';
import './list.css';

const List = () => {
  return (
    <div className="list-container">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
