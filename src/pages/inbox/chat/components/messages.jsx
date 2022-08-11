import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./message";


function Messages({ messages }) {
  return (
    <main >
      <ScrollToBottom >
      {messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}
      </ScrollToBottom> 
    </main>
  );
}

export default Messages;
