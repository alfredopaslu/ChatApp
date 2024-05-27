import React from 'react';
import Chat from './components/chat/Chat';
import List from './components/list/List';
import Notification from './components/notification/Notification';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <List />
      <Chat />
      <Notification message="You have new messages!" />
    </div>
  );
};

export default App;
