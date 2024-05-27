import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Notification from "./components/notification/Notification";


const App = () => {
  /**
   * List: Alfredo, Andrés, Álvaro, Alex (Equipo A)
   * Chat: Christian, Laura, Oscar, Leo
   *
   */
  return (
    <div className="container">
      <List />
      <Chat />
      {/* <Notification /> */}
    </div>
  );
};

export default App;
