import ChatList from "./chatList/ChatList.jsx";
import "./list.css";
import Userinfo from "./userInfo/Userinfo";

function List({ chats, updateChats, updateChat }) {
  const newChats = [...chats];

  console.log("newChats :>> ", newChats);

  return (
    <div className="list">
      <Userinfo />
      {newChats.map((chat) => {
        return (
                     
          <ChatList key={chat.user_id} chat={chat} updateChat={updateChat} />
        
        );
      })}
    </div>
  );
}

export default List;
