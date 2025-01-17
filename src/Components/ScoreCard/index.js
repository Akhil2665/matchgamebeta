import './index.css'

const ScoreCard = props => {
  const {score, restartGame} = props
  const onclickedPlayAgain = () => restartGame()
  return (
    <div className="scorecard-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="player-score">{score}</p>

      <button
        className="play-again-button"
        type="button"
        onClick={onclickedPlayAgain}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="reset"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
