import React, { Component } from 'react'
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <div>
        <p class="text-cyan-800">
            {this.props.popup}
        </p>
      </div>
    )
  }
}

const reduxState = (state) => ({
  // Merubah global state 
  popup: state.popup
})

export default connect(reduxState, null) (Login)