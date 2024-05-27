import ChatList from "./chatList/ChatList"
import "./list.css"
import Userinfo from "./userInfo/Userinfo"

const List = (props) => {
  return (
    <div className='list'>
      <Userinfo myUserImage = {props.myUserImage} changeUserImage={props.changeUserImage} fileInputRef={props.fileInputRef}/>
      <ChatList/>
    </div>
  )
}

export default List