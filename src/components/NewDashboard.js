import React, { Component } from 'react'

class NewDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  logout = (e) => {
    e.preventDefault()
    this.props.logout()
    this.props.history.push('/signin')
  }

  handleForm = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="dash-hero">
        <div>Hello lol</div>
      </div>
    )
  }
}

export default NewDashboard
