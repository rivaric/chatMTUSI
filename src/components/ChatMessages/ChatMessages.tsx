import { Message } from '../Message/Message'
import { Typing } from '../Typing/Typing'
import './ChatMessages.css'

export const ChatMessages = () => {
  return (
    <div className="chat-messages-wrapper">
      <div className="chat-messages">
        <Message sender="client" />
        <Message sender="gpt" />

        <Message sender="client" />
        <Message sender="gpt" />
        <Typing />
      </div>
    </div>
  )
}
