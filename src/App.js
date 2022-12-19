import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {isClicked: true, userInput: ''}

  onChangeUsername = event => {
    this.setState({userInput: event.target.value})
  }

  onClickSave = () => {
    this.setState({isClicked: false})
  }

  onClickEdit = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {isClicked, userInput} = this.state
    let buttonClicked
    if (isClicked) {
      buttonClicked = (
        <div className="bg-input">
          <input
            type="text"
            placeholder={userInput}
            value={userInput}
            className="input-text"
            onChange={this.onChangeUsername}
          />
          <button
            type="button"
            className="button-name"
            onClick={this.onClickSave}
          >
            Save
          </button>
        </div>
      )
    } else {
      buttonClicked = (
        <div className="bg-input">
          <p className="name">{userInput}</p>
          <button
            type="button"
            className="button-name"
            onClick={this.onClickEdit}
          >
            Edit
          </button>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="heading">Editable Text Input</h1>
          {buttonClicked}
        </div>
      </div>
    )
  }
}

export default App
