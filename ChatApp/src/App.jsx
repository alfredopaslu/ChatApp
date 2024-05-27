import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Notification from "./components/notification/Notification";


const App = () => {
  /**
   * Chat:
   * List: 
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
