import { useState } from "react";
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
const App = () => {

  const [chats, setChats] = useState([]);

  setTimeout(() => {
    setChats(updateChats(chats))
    console.log('chats :>> ', chats);
  }, timmer);

  return (
    <div className="container">
      <List />
      <Chat />
      {/* <Notification /> */}
    </div>
  );
};

export default App;
