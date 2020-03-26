import React, { useState } from 'react'

export default function SignUp() {
    const [state, setState] = useState({ email: '', password: '',firstName:'',lastName:'' })

    function handleChange(e){
        setState({...state,[e.target.id]:e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(state)
    }

    return (
        <div class="container">
            <form onSubmit={handleSubmit} class="white">
                <h5 class="grey-text text-dark">Sign Up</h5>
                <div class="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email'value={state.email}  onChange={handleChange} />
                </div>
                <div class="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' value={state.password}  onChange={handleChange} />

                </div>

                <div class="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' value={state.firstName}  onChange={handleChange} />
                </div>
                <div class="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' value={state.lastName}  onChange={handleChange} />
                </div>


                <div class="input-field">
                    <button class="btn pink lighten-1 z-depth-0" >Login</button>
                </div>
            </form>
        </div>
    )
}