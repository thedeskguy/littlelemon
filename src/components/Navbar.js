import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../icons_assets/Logo.svg'
export default function Navbar() {
    return (

        <nav>

            <ul>
                <img src={Logo} alt="logo" className="logo" />
                <li><Link to="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Menu</Link></li>
                <li><Link href="/">Reservations</Link></li>
                <li><Link href="/">Order Online</Link></li>
                <li><Link href="/">Login</Link></li>
            </ul>
        </nav>

    )
}
