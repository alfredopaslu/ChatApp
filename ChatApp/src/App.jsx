import { useRef, useState } from "react";
import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Notification from "./components/notification/Notification";


const App = () => {
  /**
   * List: Alfredo, Andrés, Álvaro, Alex (Equipo A)
   * Chat: Christian, Laura, Oscar, Leo
   *
   */
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
      {/* <Notification /> */}
    </div>
  );
};

export default App;
