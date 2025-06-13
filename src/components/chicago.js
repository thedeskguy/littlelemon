import React from 'react'
import restaurant from '../icons_assets/restaurant.jpg'
export default function chicago() {
    return (
        <section className="chicago">
            <div className="chicago-text">
                <h2>About Little Lemon</h2>
                <p>
                    Little Lemon is a charming, family-owned Mediterranean restaurant located in the heart of Chicago.
                    Founded by two passionate brothers, Mario and Adrian, the restaurant celebrates the rich culinary heritage of the Mediterranean with a modern twist.
                </p>
                <p>
                    Our menu is crafted with fresh, locally-sourced ingredients and traditional recipes passed down through generations.
                    Whether you're dining in or ordering online, we promise a flavorful, authentic experience inspired by the coasts of Greece, Italy, and Lebanon.
                </p>
            </div>
            <div className="chicago-image">
                <img src={restaurant} alt="Inside Little Lemon restaurant" />
            </div>
        </section>
    )
}
