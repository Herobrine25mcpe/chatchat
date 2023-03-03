/*import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       
      </div>
    </div>
  )
}

export default Message */

import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages)

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;