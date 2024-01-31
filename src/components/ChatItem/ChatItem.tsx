import { Logo } from '../../assets/images/Logo'
import './ChatItem.css'

export const ChatItem = () => {
  return (
    <div className="chat-item">
      <div className="chat-icon">
        <Logo />
      </div>
      <div className="chat-wrapper">
        <div className="chat-title">МТУСИ</div>
        <div className="chat-text">Привет!</div>
      </div>
    </div>
  )
}
