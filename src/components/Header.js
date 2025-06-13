import React from 'react'
// import Logo from '../icons_assets/Logo.svg'
import Chef from '../icons_assets/chef.jpg'
export default function Header() {
    return (
        // <header>
        //     {/* <img src={Logo} alt="logo" className="logo" /> */}

        // </header>
        <header className="hero">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="button">Reserve a Table</button>
            </div>
            <img src={Chef} alt="Chef serving food" />
        </header>

    )
}
