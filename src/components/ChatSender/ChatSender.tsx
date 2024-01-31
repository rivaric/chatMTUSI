import { ArrowUp } from '../../assets/icons/ArrowUp'
import './ChatSender.css'

export const ChatSender = () => {
  return (
    <div className="chat-sender">
      <input type="text" className="chat-sender-input" placeholder="Написать сообщение..." />
      <button className="chat-sender-btn">
        <ArrowUp />
      </button>
    </div>
  )
}
