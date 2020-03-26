import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedInLinks() {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/createproject'>New Project</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
            </ul>
        </div>

    )
}