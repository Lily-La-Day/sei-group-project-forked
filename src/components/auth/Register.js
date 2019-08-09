import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Register extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    console.log(this.state)
    e.preventDefault()

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))

  }

  render() {

    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="row" id="registerForm">
          <h2>Register</h2>
          <div className="control ten columns">
            <label htmlFor="username">Username</label>
            <input
              className="u-full-width"
              type="username"
              placeholder=""
              name="username"
              id="exampleEmailInput"
              onChange={this.handleChange}/>
          </div>
          <div className="control ten columns">
            <label htmlFor="exampleEmailInput">Email</label>
            <input
              className="u-full-width"
              type="email"
              placeholder=""
              name="email"
              id="exampleEmailInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="control ten columns">
            <label htmlFor="password">Password</label>
            <input
              className="u-full-width"
              type="password"
              placeholder=""
              name="password"
              id="exampleEmailInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="control ten columns">
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              className="u-full-width"
              type="password"
              placeholder=""
              name="passwordConfirmation"
              id="exampleEmailInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="control ten columns">
            <label htmlFor="bio">Bio</label>
            <textarea
              minLength="20"
              maxLength="600"
              className="u-full-width"
              type="text"
              placeholder=""
              name="bio"
              id="exampleEmailInput"
              onChange={this.handleChange}
            />
          </div>
          <div className="control ten columns">
            <button type="submit" className="button">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Register
