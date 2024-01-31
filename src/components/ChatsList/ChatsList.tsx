import { Search } from '../../assets/icons/Search'
import { ChatItem } from '../ChatItem/ChatItem'
import './ChatsList.css'

export const ChatsList = () => {
  return (
    <div className="chats-list">
      <div className="chats-search">
        <input type="text" placeholder="Поиск" className="chats-search-input" />
        <div className="chats-search-icon">
          <Search />
        </div>
      </div>
      <div className="chats-wrapper">
        <ChatItem />
      </div>
    </div>
  )
}
