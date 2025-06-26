// src/components/CartPage.jsx
import React from 'react';
import './CartPage.css';

function CartPage({ cartItems, onProceedToPayment, onBackToHome }) {
    // Calculate total price
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="cart-page-container">
            <header className="cart-header">
                <button onClick={onBackToHome} className="back-button">← Back to Home</button>
                <h1>Your Shopping Cart</h1>
            </header>

            <main className="cart-items-section">
                {cartItems.length === 0 ? (
                    <p className="empty-cart-message">Your cart is empty.</p>
                ) : (
                    <div className="cart-items-list">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item-card">
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ₹{item.price.toFixed(2)}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <div className="item-subtotal">
                                    Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {cartItems.length > 0 && (
                <footer className="cart-summary">
                    <div className="total-amount">
                        Total: <span>₹{total.toFixed(2)}</span>
                    </div>
                    <button onClick={onProceedToPayment} className="proceed-to-payment-button">
                        Proceed to Payment
                    </button>
                </footer>
            )}
        </div>
    );
}

export default CartPage;