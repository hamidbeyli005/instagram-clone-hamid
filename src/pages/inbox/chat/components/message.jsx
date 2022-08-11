import { useSelector } from "react-redux";
import styles from "scss/Components.module.scss";

function Message({ message }) {
  const user = useSelector((state) => state.auth.user);
  return (
    <div
      className={styles.message}
      style={
        message.from.id === user.uid ? { justifyContent: "flex-end" } : null
      }
    >
      {message.from.id !== user.uid ? (
        <img height={24} width={24} src={message.from.avatar} alt="" />
      ) : null}
      <p
        style={message.from.id === user.uid ? { background: "#efefef" } : null}
      >
        {message.message}
      </p>
    </div>
  );
}

export default Message;
