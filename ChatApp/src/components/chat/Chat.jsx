import { useEffect, useState } from "react";
import "./chat.css";


const Chat = (props) => {
  const [isLarge, setIsLarge] = useState(false);
  const [userImage, setUserImage] = useState('../../public/fotosamuel.jpg');

  const toggleSize = () => {
    setIsLarge(!isLarge);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <div className="picture">
            <img
              alt="Foto de Samuel"
              className= {isLarge ? 'large' : ''}
              src={userImage}
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
        <div className="message own">
          <div className="texts">
            <div className="imageText">
              <p>texto mensaje</p>
              <img src={props.myUserImage}
                alt="avatar del usuario"
              />
            </div>
            <span>hora envío</span>
          </div>
        </div>
        <div className="message">
          <div className="texts">
            <div className="imageText">
              <img
                className={isLarge ? 'large' : ''}
                alt="avatar del usuario"
                src={userImage}
              />
              <p>texto de la otra persona</p>
            </div>
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
