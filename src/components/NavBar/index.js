// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props

  const className = gameOver ? 'hide' : ''

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logoImg"
        />
        <h1 className="logoName">Emoji Game</h1>
      </div>
      <div className={`scoreContainer ${className}`}>
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}
export default NavBar
