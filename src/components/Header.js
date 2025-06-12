import React from 'react'
import Logo from '../icons_assets/Logo.svg'
export default function Header() {
    return (
        <header>
            <img src={Logo} alt="logo" className="logo" />
        </header>
    )
}
