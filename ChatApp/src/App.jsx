import { useState, useEffect } from "react";
import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import { updateChats, timmer } from "./logic/generator";
//import Notification from "./components/notification/Notification";

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

  return (
    <div className="container">
      <List chats={chats} updateChats={updateChats2} updateChat={updateChat} />
      <Chat />
      {/* <Notification /> */}
    </div>
  );
}

export default App;
