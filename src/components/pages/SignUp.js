import React from 'react';
import './SignUp.css';
function SignUp() {
    return (
        <div className='sign-up'>
            <div className='div-login'>
                <div className='div-login-logo'>
                    Register &nbsp;
                </div>
                <div className='register-container'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name='text' placeholder='First Name' required />
                        <input type='text' name='text' placeholder='Last Name' required />
                        <input type='email' name='email' placeholder='Email Address' required onChange={this.handleChange} />
                        <input type='password' name='pwd' placeholder='Password' required onChange={this.handleChange} />
                        <input type='password' name='cpwd' placeholder='Confirm Password' required onChange={this.handleChange} />
                        <button onSubmit={this.handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;