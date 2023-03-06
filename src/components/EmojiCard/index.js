// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, shuffleList} = props
  const {id, emojiName, emojiUrl} = details

  const onEmoji = () => {
    shuffleList(id)
  }

  return (
    <li className="emojiCard">
      <button className="emojiBtn" type="button" onClick={onEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emojiImg" />
      </button>
    </li>
  )
}
export default EmojiCard
