import React from 'react'
import greekSalad from '../icons_assets/greekSalad.jpg'
import bruschetta from '../icons_assets/bruchetta.svg'
import lemonDessert from '../icons_assets/lemonDessert.jpg'
export default function Main() {
    return (
        <main>
            <h2>This week's specials!</h2>
            <section className="specials">
                <article className="special-card">
                    <img src={greekSalad} alt="Greek salad" />
                    <h3>Greek salad <span style={{ color: 'red' }}>$12.99</span></h3>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.</p>
                    <p><strong>Order a delivery 🚚</strong></p>
                </article>

                <article className="special-card">
                    <img src={bruschetta} alt="Bruschetta" />
                    <h3>Bruschetta <span style={{ color: 'red' }}>$5.99</span></h3>
                    <p>Grilled bread topped with garlic, olive oil, and tomatoes.</p>
                    <p><strong>Order a delivery 🚚</strong></p>
                </article>

                <article className="special-card">
                    <img src={lemonDessert} alt="Lemon Dessert" />
                    <h3>Lemon Dessert <span style={{ color: 'red' }}>$5.00</span></h3>
                    <p>Made with grandma's secret recipe, tangy and sweet!</p>
                    <p><strong>Order a delivery 🚚</strong></p>
                </article>
            </section>
        </main>
    )
}
