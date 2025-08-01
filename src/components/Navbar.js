import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../icons_assets/Logo.svg'
export default function Navbar() {
    return (

        <nav>

            <ul>
                <img src={Logo} alt="logo" className="logo" />
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>

    )
}
