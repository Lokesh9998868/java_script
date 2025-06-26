// src/components/HomePage.jsx
import React from 'react';
import './HomePage.css';

// HomePage component now accepts onAddToCart prop
function HomePage({ onAddToCart }) {
    // Define your products here
    const products = [
        { id: 'onion', name: 'Onions', price: 30, imageUrl: 'https://freedesignfile.com/upload/2017/04/Onions-on-a-white-background-HD-picture.jpg' },
        { id: 'tomato', name: 'Tomatoes', price: 30, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg' },
        { id: 'potato', name: 'Potatoes', price: 25, imageUrl: 'https://media.gettyimages.com/id/157430678/photo/three-potatoes.jpg?s=170667a&w=gi&k=20&c=IpSClSRFm03cfgJowKGmQ6aciBXGtj_LdPgYLU1ZDuM=' },
        { id: 'carrot', name: 'Carrots', price: 40, imageUrl: 'https://t4.ftcdn.net/jpg/00/80/96/17/360_F_80961739_hep1UZaQRsy5WQOYU3jkOr5CB7A6xc3U.jpg' },
        { id: 'cabbage', name: 'Cabbage', price: 35, imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/030/657/553/small_2x/cabbage-with-transparent-background-high-quality-ultra-hd-free-photo.jpg' },
        { id: 'bell_pepper', name: 'Bell Peppers', price: 70, imageUrl: 'https://img.freepik.com/premium-photo/bell-peppers-isolated-white-background_198067-11.jpg' },
    ];

    return (
        <div className="home-page-container">
            <header className="home-header">
                <h1>Aswapuram Fresh</h1>
                <p>Your local farm-fresh delivery!</p>
            </header>

            <main className="product-list-section">
                <h2>Available Vegetables</h2>
                <div className="product-cards-container">
                    {products.map(product => (
                        <div className="product-card" key={product.id}>
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/E0E0E0/999999?text=Image+Not+Found"; }}
                            />
                            <h3>{product.name}</h3>
                            <p>₹{product.price.toFixed(2)}</p>
                            <button
                                className="add-to-cart-button"
                                onClick={() => onAddToCart(product)} // Call onAddToCart with the product
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default HomePage;