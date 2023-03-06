// Write your code here.
const WinOrLoseCard = props => {
  const {score, restartGame} = props

  const onPlayAgain = () => {
    restartGame(score)
  }

  const winCard = (
    <div className="winOrLoseCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
        className="resultImg"
      />
      <h1 className="resultPara">You Won</h1>
      <p>Best Score</p>
      <p>12/12</p>
      <button type="button" className="playAgain" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  )

  const loseCad = (
    <div className="winOrLoseCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="resultImg"
      />
      <h1 className="resultPara">You Lose</h1>
      <p>Score</p>
      <p>{score}/12</p>
      <button type="button" className="playAgain" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  )

  return score === 12 ? winCard : loseCad
}
export default WinOrLoseCard
