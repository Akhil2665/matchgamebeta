import {Component} from 'react'
import TabItem from '../TabItem'
import ImageCard from '../ImageCard'
import ScoreCard from '../ScoreCard'

import './index.css'

class MatchGamePlay extends Component {
  state = {
    score: 0,
    remainingTime: 60,
    index: 0,
    activeTab: 'FRUIT',
    isGameOver: false,
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState(prevState => {
      if (prevState.remainingTime === 1) {
        clearInterval(this.timerID)
        return {remainingTime: 0, isGameOver: true}
      }
      return {remainingTime: prevState.remainingTime - 1}
    })
  }

  restartGame = () => {
    clearInterval(this.timerID)
    this.setState({
      score: 0,
      remainingTime: 60,
      index: Math.ceil(Math.random() * 29),
      activeTab: 'FRUIT',
      isGameOver: false,
    })
    this.timerID = setInterval(this.tick, 1000)
  }

  onChangeActivetab = tabId => {
    this.setState({activeTab: tabId})
  }

  isImagesMatched = id => {
    const {index} = this.state
    const {imagesList} = this.props
    const randomImageId = imagesList[index].id
    console.log(randomImageId)

    if (randomImageId === id) {
      this.setState(prevState => ({
        index: Math.ceil(Math.random() * 29),
        score: prevState.score + 1,
      }))
    } else {
      this.setState({
        isGameOver: true,
      })
    }
  }

  render() {
    const {score, remainingTime, index, activeTab, isGameOver} = this.state
    const {imagesList, tabsList} = this.props
    const randomImageUrl = imagesList[index].imageUrl
    const formattedSec =
      remainingTime < 10 ? `0${remainingTime}` : remainingTime
    const filteredList = imagesList.filter(
      eachObj => eachObj.category === activeTab,
    )
    return (
      <div className="app-container">
        <nav className="game-navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />

          <ul className="navbar-score-container">
            <li className="nav-timer-container">
              <p className="score">
                Score: <span className="nav-highlighter">{score}</span>{' '}
              </p>
            </li>
            <li className="nav-timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                className="timer"
                alt="timer"
              />
              <p className="nav-highlighter">{formattedSec} sec</p>
            </li>
          </ul>
        </nav>

        {!isGameOver && (
          <div className="game-play-container">
            <img src={randomImageUrl} alt="match" className="match-image" />
            <ul className="tab-list-container">
              {tabsList.map(eachTab => (
                <TabItem
                  tabDetails={eachTab}
                  key={eachTab.tabId}
                  activeTab={activeTab}
                  onChangeActivetab={this.onChangeActivetab}
                />
              ))}
            </ul>

            <ul className="images-list-container">
              {filteredList.map(eachImage => (
                <ImageCard
                  imageDetails={eachImage}
                  key={eachImage.id}
                  isImagesMatched={this.isImagesMatched}
                />
              ))}
            </ul>
          </div>
        )}
        {isGameOver && (
          <ScoreCard score={score} restartGame={this.restartGame} />
        )}
      </div>
    )
  }
}

export default MatchGamePlay
