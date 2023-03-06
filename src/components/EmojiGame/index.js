/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

const initialEmojiList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojisList: initialEmojiList,
    previouslySeenEmojis: [],
    gameOver: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  shuffleList = id => {
    const {previouslySeenEmojis} = this.state
    if (previouslySeenEmojis.includes(id) === !true) {
      this.setState(prevState => ({
        previouslySeenEmojis: [...prevState.previouslySeenEmojis, id],
        emojisList: this.shuffledEmojisList(),
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        gameOver: !prevState.gameOver,
      }))
    }
  }

  restartGame = score => {
    this.setState(prevState => ({
      topScore: score > prevState.topScore ? score : prevState.score,
      score: 0,
      gameOver: !prevState.gameOver,
      emojisList: prevState.emojisList,
      previouslySeenEmojis: [],
    }))
  }

  render() {
    const {score, topScore, emojisList, gameOver} = this.state

    return (
      <div className="mainContainer">
        <NavBar score={score} topScore={topScore} gameOver={gameOver} />

        <div className="emojiListContainer">
          {gameOver ? (
            <WinOrLoseCard score={score} restartGame={this.restartGame} />
          ) : (
            <ul className="emojisContainer">
              {emojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  details={each}
                  shuffleList={this.shuffleList}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
