import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function withAuth(ComponentToBeRendered) {
  class Authenticate extends Component {
    componentDidMount() {
      if (this.props.isAuthenticated === false) {
        this.props.history.push('/signin', {
          from: this.props.location.pathname,
        })
      }
    }
    componentDidUpdate(prevProps) {
      if (this.props.isAuthenticated === false) {
        this.props.history.push('/signin', {
          from: prevProps.location.pathname,
        })
      }
    }
    render() {
      return <ComponentToBeRendered {...this.props} />
    }
  }
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentUser.isAuthenticated,
    }
  }

  return connect(mapStateToProps)(Authenticate)
}
