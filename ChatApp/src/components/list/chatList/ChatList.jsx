import "./chatList.css";

const ChatList = () => {

/**
 * Buscador (input Searchbar)
 *  
 */  
  return (
    <div className="chatList">
      <div className="search">

        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span> Chat List Texts Span</span>
          <p>Chat List Texts P</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
