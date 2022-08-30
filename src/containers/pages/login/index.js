import React, { Component } from 'react'
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { loginUserAPI } from '../../../config/redux/action';
import { Navigate } from 'react-router-dom';

class Login extends Component {   
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
  handleLoginSubmit = async () => {
    const {email,password} = this.state;

    // Diambil berdasarkan redux dispatch, ut dikirmkan ke redux action
    const res = await this.props.loginAPI({email, password}).catch(err => err);

    if (res) {
      console.log('login success');
      this.setState({
        email: '',
        password: '',
      })
    } else {
      console.log('login gagal!')
    }
  }

  render() {
    if (this.props.isLogin) {
      return (<Navigate to='/dashboard' />)
    }

    return (
      <div className='container'>
      <div className='card'>
        <div className='card-title'>
          <h1>
            Login Page
          </h1>
        </div>
        <input className='form-control' placeholder='Email' type='text' id='email' onChange={this.handleChangeText} value={this.state.email} />
        <input className='form-control' placeholder='Password' type='password' id='password' onChange={this.handleChangeText} value={this.state.password} />
        <Button onClick={this.handleLoginSubmit} title='Login' loading={this.props.isLoading} />
      </div>
    </div>
    )
  }
}

// Membuat Function reduxState
const reduxState = (state) => ({
  isLoading: state.isLoading,
  isLogin: state.isLogin
})

// Membuat function reduxDispatch
const reduxDispatch = (dispatch) => ({
  // mengirimkan props berupa email dan password ke belakang 
  loginAPI: (data) => dispatch(loginUserAPI(data))
})


export default connect(reduxState, reduxDispatch)(Login)