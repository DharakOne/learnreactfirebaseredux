import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignOutLink'

export default function Navbar() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>MarioPLan</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}