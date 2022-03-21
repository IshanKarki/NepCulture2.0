import React from 'react';
import './SignIn.css';
class SignIn extends React.Component {
    state = {
        email: '',
        pwd: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.isLogin(true)
    }
    render() {
        return (
            <div className='sign-in'>
                <div className='div-login'> 
                    <div className='div-login-logo'>
                        Login &nbsp;
                    </div>
                    <div className='login-container'>
                        <form onSubmit={this.handleSubmit}>
                            <input type='email' name='email' placeholder='Email Address' required onChange={this.handleChange} />
                            <input type='password' name='pwd' placeholder='Password' required onChange={this.handleChange} />
                            <button onSubmit={this.handleSubmit}>Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;