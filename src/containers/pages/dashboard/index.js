import React, { Component } from 'react'
import { connect } from 'react-redux';


class Dashboard extends Component {
  render() {
    return (
      <div>
       <h1>Halo {this.state.user.email}</h1>
      </div>
    )
  }
}

// Membuat Function reduxState
const reduxState = (state) => ({
  user: state.user
})

export default connect(reduxState,null)(Dashboard)