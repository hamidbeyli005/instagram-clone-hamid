import { NavLink } from "react-router-dom";
import styles from "scss/Components.module.scss";

function ChatList() {
  const chats = [
    {
      id: 1,
      user: {
        avatar: "/images/main/no_person.jpg",
        name: "Hamid Hamidbeyli",
      },
      lastMessage: "Salammmm",
    },
    {
      id: 2,
      user: {
        avatar: "/images/main/no_person.jpg",
        name: "Arif Hasanov",
      },
      lastMessage: "Hello how are you?",
    },
    {
      id: 3,
      user: {
        avatar: "/images/main/no_person.jpg",
        name: "Ali Quliyev",
      },
      lastMessage: "salam hamid",
    },

    {
      id: 4,
      user: {
        avatar: "/images/main/no_person.jpg",
        name: "Ruslan Quliyev",
      },
      lastMessage: "hello hamid",
    },
  ];
  return (
    <div>
      <div className={styles.chatListTop}>
        <h3>Messages</h3>
        <p>14 requests</p>
      </div>

      <div className={styles.chatList}>
        {chats.map((chat) => (
          <NavLink key={chat.id} to={`/inbox/${chat.id}`}>
            <div>
              <img width={56} height={56} src={chat.user.avatar} alt="" />
            </div>

            <div>
              <h3>{chat.user.name}</h3>
              <p>{chat.lastMessage} </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default ChatList;
