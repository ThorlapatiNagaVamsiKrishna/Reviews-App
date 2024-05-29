import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onChangeRightArrow = () => {
    const {count} = this.state
    if (count >= 0 && count < 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  onChangeLeftArrow = () => {
    const {count} = this.state
    if (count !== 0 && count < 4) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, description, companyName} = reviewsList[count]
    return (
      <div className="reviews-main-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="reviews-user-information-container">
          <button
            testid="leftArrow"
            type="button"
            className="reviews-button"
            onClick={this.onChangeLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-image"
            />
          </button>
          <div>
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="reviews-description">{companyName}</p>
            <p className="reviews-description">{description}</p>
          </div>
          <button
            type="button"
            testid="rightArrow"
            className="reviews-button"
            onClick={this.onChangeRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
