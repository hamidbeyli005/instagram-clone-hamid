import Header from "./components/header";
import Reply from "./components/reply";
import React, { useState } from "react";
import styles from "scss/Components.module.scss";
import Messages from "./components/messages";

function Chat() {
  const user = {
    name: "hamid hamidbeyli",
    avatar: "/images/main/no_person.jpg",
  };

  const [messages, setMessages] = useState([
    {
      from: {
        id: "eZYuaJFozOgB2oNOCw7iqn9asn92",
        name: "vali huseynli",
        username: "vali_010506",
        avatar: "/images/main/no_person.jpg",
      },
      message: "hello bro",
    },
    {
      from: {
        id: "eZYuaJFozOgB2oNOCw7iqn9asn92",
        name: "vali huseynli",
        username: "vali_010506",
        avatar: "/images/main/no_person.jpg",
      },
      message: "how are you?",
    },
    {
      from: {
        id: "oDBpEM6CvbVC79Sz3H5XBlKPkrG3",
        name: "hamid hamidbeyli",
        username: "hamid057",
        avatar: "/images/main/no_person.jpg",
      },
      message: "l am fine ",
    },
    {
      from: {
        id: "oDBpEM6CvbVC79Sz3H5XBlKPkrG3",
        name: "hamid hamidbeyli",
        username: "hamid057",
        avatar: "/images/main/no_person.jpg",
      },
      message: "thank you",
    },
    {
      from: {
        id: "oDBpEM6CvbVC79Sz3H5XBlKPkrG3",
        name: "hamid hamidbeyli",
        username: "hamid057",
        avatar: "/images/main/no_person.jpg",
      },
      message: "how are you?",
    },
    {
      from: {
        id: "oDBpEM6CvbVC79Sz3H5XBlKPkrG3",
        name: "hamid hamidbeyli",
        username: "hamid057",
        avatar: "/images/main/no_person.jpg",
      },
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum quibusdam adipisci, maiores inventore assumenda libero amet tempore magnam ad quisquam quasi ex neque, corporis possimus ullam quia ipsam veritatis provident consequuntur nobis beatae unde praesentium error. Quas ullam laborum nulla delectus ducimus, dicta eligendi eaque asperiores rerum, sapiente consectetur.",
    },
    {
      from: {
        id: "eZYuaJFozOgB2oNOCw7iqn9asn92",
        name: "vali huseynli",
        username: "vali_010506",
        avatar: "/images/main/no_person.jpg",
      },
      message: "thanks i'm fine too",
    },

    {
      from: {
        id: "eZYuaJFozOgB2oNOCw7iqn9asn92",
        name: "vali huseynli",
        username: "vali_010506",
        avatar: "/images/main/no_person.jpg",
      },
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum quibusdam adipisci, maiores inventore assumenda libero amet tempore magnam ad quisquam quasi ex neque, corporis possimus ullam quia ipsam veritatis provident consequuntur nobis beatae unde praesentium error. Quas ullam laborum nulla delectus ducimus, dicta eligendi eaque asperiores rerum, sapiente consectetur.",
    },
  ]);

  return (
    <div className={styles.Chat}>
      <Header user={user} />
      <Messages messages={messages} />
      <Reply  setMessages={setMessages} />
    </div>
  );
}

export default Chat;
