import React, { useState } from "react";
import ChatList from "./chatList/ChatList";
import "./list.css";
import Userinfo from "./userInfo/Userinfo";
import Chat from "./chat/Chat"; // Importamos el componente Chat

const List = () => {
  const [selectedUser, setSelectedUser] = useState(null); // Estado para almacenar el usuario seleccionado

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="list">
      <Userinfo />
      <ChatList onSelectUser={handleUserSelect} />
      {/* Renderizamos el componente Chat con el usuario seleccionado */}
      {selectedUser && <Chat selectedUser={selectedUser} />}
    </div>
  );
};

export default List;
