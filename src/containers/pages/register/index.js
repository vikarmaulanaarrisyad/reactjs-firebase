import React, { Component } from 'react'
import './Register.scss'
import Button from '../../../components/atoms/Button'
import { registerUserAPI } from '../../../config/redux/action'
import { connect } from 'react-redux'

class Register extends Component {

  state = {
    email: '',
    password: '',
  }

  // Membuat function merubah value inputan text
  handleChangeText = (e) => {
    // merubah value dari state berdasarkan id dari inputan
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // Membuat Aksi jika button di clik
  handleRegisterSubmit = () => {
    const {email,password} = this.state;

    // Diambil berdasarkan redux dispatch, ut dikirmkan ke redux action
    this.props.registerAPI({email, password})
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='card'>
            <div className='card-title'>
              <h1>
                Register Page
              </h1>
            </div>
              <input className='form-control' placeholder='Email' type='text' id='email' onChange={this.handleChangeText} />
              <input className='form-control' placeholder='Password' type='password' id='password' onChange={this.handleChangeText} />
              <Button onClick={this.handleRegisterSubmit} title='Register' loading={this.props.isLoading} />
          </div>
        </div>
      </div>
    )
  }
}

// Membuat Function reduxState
const reduxState = (state) => ({
  isLoading: state.isLoading
})

// Membuat function reduxDispatch
const reduxDispatch = (dispatch) => ({
  // mengirimkan props berupa email dan password ke belakang 
  registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState,reduxDispatch)(Register)