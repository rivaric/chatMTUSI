import './Message.css'

export const Message = ({ sender }: { sender: 'gpt' | 'client' }) => {
  return sender === 'gpt' ? (
    <div className="message gpt">
      <div className="message-test">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab animi
        doloremque quos consequatur ut a praesentium repellat tempora alias unde
        beatae harum, odio dolore, veritatis nobis? Dolores ut ullam nostrum?
      </div>
    </div>
  ) : (
    <div className="message client">
      <div className="message-test">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        praesentium eaque dolorem minus sit. Magnam reprehenderit debitis
        veritatis! A eius hic dignissimos qui quaerat ad architecto beatae
        consequatur cupiditate nulla?
      </div>
    </div>
  )
}
