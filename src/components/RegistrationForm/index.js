// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameBlur: false,
    lastNameBlur: false,
    isFormSubmitted: false,
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstNameBlur: true})
    } else {
      this.setState({firstNameBlur: false, firstName: event.target.value})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({lastNameBlur: true})
    } else {
      this.setState({lastNameBlur: false, lastName: event.target.value})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({firstNameBlur: true, lastNameBlur: true})
    } else if (firstName !== '' && lastName === '') {
      this.setState({firstNameBlur: false, lastNameBlur: true})
    } else if (firstName === '' && lastName !== '') {
      this.setState({firstNameBlur: true, lastNameBlur: false})
    } else {
      this.setState({isFormSubmitted: true})
    }
  }

  onClickSubmitAnother = () => {
    this.setState({isFormSubmitted: false})
  }

  render() {
    const {firstNameBlur, lastNameBlur, isFormSubmitted} = this.state

    const inputBlurFirst = firstNameBlur && 'inputBlur'
    const inputBlurLast = lastNameBlur && 'inputBlur'
    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        <div>
          {isFormSubmitted ? (
            <div className="submitted-container">
              <img
                className="success-image"
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p className="submitted-text">Submitted Successfully</p>
              <button
                type="button"
                className="submit-button"
                onClick={this.onClickSubmitAnother}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <div className="input-cont">
                <label htmlFor="firstName" className="label-text">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  id="firstName"
                  className={`inputEl ${inputBlurFirst}`}
                  placeholder="First name"
                  onBlur={this.onBlurFirstName}
                />
                {firstNameBlur && <p className="blur-text">Required</p>}
              </div>
              <div className="input-cont">
                <label htmlFor="lastName" className="label-text">
                  LAST NAME
                </label>
                <input
                  type="text"
                  id="lastName"
                  className={`inputEl ${inputBlurLast}`}
                  placeholder="Last name"
                  onBlur={this.onBlurLastName}
                />
                {lastNameBlur && <p className="blur-text">Required</p>}
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
