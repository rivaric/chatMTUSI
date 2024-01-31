import { ChatMessages } from '../ChatMessages/ChatMessages'
import { ChatSender } from '../ChatSender/ChatSender'
import { ChatSpaceHeader } from '../ChatSpaceHeader/ChatSpaceHeader'
import './ChatSpace.css'

export const ChatSpace = () => {
  return (
    <div className="chat-space">
      <ChatSpaceHeader />
      <ChatMessages />
      <ChatSender />
    </div>
  )
}
