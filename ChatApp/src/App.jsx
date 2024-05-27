
import { useState, useRef useEffect } from "react";
import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import { updateChats, timmer } from "./logic/generator";

/**
 * App component
 *
 * @example List: Alfredo, Andrés, Álvaro, Alex (Equipo A)
 * @example Chat: Christian, Laura, Oscar, Leonardo (Equipo B)
 * @example Messages: Luis, forever alone (Equipo C)
 */
function App() {
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setChats(updateChats(chats));
    }, timmer);

    return () => clearInterval(interval);
  });

  const updateChat = (chat) => {
    setChat(chat);
  };

  const updateChats2 = (chats) => {
    setChat(chats);
  };

const App = () => {

  const [myUserImage, setMyUserImage] = useState('../public/avatar.png');
  const fileInputRef = useRef(null);

  const changeUserImage = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.onload = () => {
        setMyUserImage(reader.result);
      };
      
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="container">
      <List myUserImage={myUserImage} changeUserImage={changeUserImage} fileInputRef={fileInputRef}/>
      <Chat myUserImage={myUserImage}/>

    </div>
  );
}

export default App;
