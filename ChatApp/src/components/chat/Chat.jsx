import { useEffect, useRef, useState } from "react";
import "./chat.css";


const Chat = () => {
/**
 * Enviar nuevos mensajes (utilizando botón Enviar y tecla Enter) 
 * 
 */


  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Chat top user texts span</span>
            <p>Chat top user texts p</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">

        <div className="message own" >
          <div className="texts">
            <img src="./avatar.png" alt="" />
            <p>texto mensaje</p>
            <span>hora envío</span>
          </div>
        </div>
        
        <div className="message">
          <div className="texts">
            <img src="./avatar.png" alt="" />
            <p>texto de la otra persona</p>
            <span>hora envío</span>
          </div>
        </div>
      </div>
      
      <div className="bottom">
        <input type="text" placeholder="Type a message..." />
        <button className="sendButton"> Enviar </button>
      </div>
    </div>
  );
};

export default Chat;
