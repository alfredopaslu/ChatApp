import ChatList from "./chatList/ChatList.jsx";
import "./list.css";
import Userinfo from "./userInfo/Userinfo";

function List({ chats, updateChats, updateChat }) {
  const newChats = [...chats];

  console.log("newChats :>> ", newChats);

const List = (props) => {

  return (
    <div className="list">
      <Userinfo myUserImage = {props.myUserImage} changeUserImage={props.changeUserImage} fileInputRef={props.fileInputRef}/>
      {newChats.map((chat) => {
        return (
                     
          <ChatList key={chat.user_id} chat={chat} updateChat={updateChat} />
        
        );
      })}
    </div>
  );
}

export default List;
