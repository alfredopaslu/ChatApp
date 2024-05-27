import { useEffect, useRef, useState } from "react";
import "./chat.css";


const Chat = () => {
/**
 
Enviar nuevos mensajes (utilizando botón Enviar y tecla Enter) 
*/
const [isLarge,setIsLarge] = useState(false);
const [isOpacity,setIsOpacity] = useState(false);
const toggleSize = () => {
  setIsLarge(!isLarge);
  setIsOpacity(!isOpacity);
};

const opacity = isOpacity ? "chat chat-opacity" : "chat";


  return (
    <div className={opacity}>
      <div className="top">
        <div className="user">
          <div className="picture">
          <img src="../../public/fotosamuel.jpg" alt="Foto de Samuel" 
          className={isLarge ? 'large' : ''}
          onClick={toggleSize}
          />
          </div>
          <div className="texts">
            <span>Samu Propiedad de AEPEJ</span>
            <p>Ocupado</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="icono de telefono" />
          <img src="./video.png" alt="icono de video llamada" />
          <img src="./trespuntos.png" alt="icono de tres puntos" />
        </div>
      </div>
      <div className="center">

        <div className="message own" >
          <div className="texts">
            <img src="./avatar.png" alt="avatar del usuario" />
            <p>texto mensaje</p>
            <span>hora envío</span>
          </div>
        </div>
        
        <div className="message">
          <div className="texts">
            <img src="./avatar.png" alt="avatar del usuario" />
            <p>texto de la otra persona</p>
            <span>hora envío</span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <textarea name="message" rows="1" placeholder="Escribe tu mensaje aquí..."></textarea>
          <button className="sendButton"> Enviar </button>
        </div>
      </div>
  );
};

export default Chat;
