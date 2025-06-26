// src/App.jsx
import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import { useAuth } from './AuthContext';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import PaymentPage from './components/PaymentPage';

function MainAppContent() {
    const { user, logout } = useAuth();

    // State for current page, persisted in localStorage
    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = localStorage.getItem('lastVisitedPage');
        return savedPage ? savedPage : 'home';
    });

    // Effect to save current page to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('lastVisitedPage', currentPage);
    }, [currentPage]);


    // State for the actual cart items
    const [cartItems, setCartItems] = useState([]); // Cart starts empty

    // Calculate the total amount for the cart
    const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);


    // Navigation functions
    const goToCart = () => setCurrentPage('cart');
    const goToPayment = () => setCurrentPage('payment');
    const goToHome = () => setCurrentPage('home');
    const backToCart = () => setCurrentPage('cart');

    // Function to add item to cart
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // If item already in cart, update quantity
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // If new item, add with quantity 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
            {/* Logout button positioned at top-left */}
            <button
                onClick={logout}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    zIndex: 10
                }}
            >
                Logout
            </button>

            {/* View Cart button positioned at top-right */}
            {currentPage === 'home' && (
                <button
                    onClick={goToCart}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                >
                    View Cart ({cartItems.length})
                </button>
            )}

            {/* Conditional rendering of pages */}
            {currentPage === 'home' && <HomePage onAddToCart={addToCart} />}

            {currentPage === 'cart' && (
                <CartPage
                    cartItems={cartItems}
                    onProceedToPayment={goToPayment}
                    onBackToHome={goToHome}
                />
            )}

            {currentPage === 'payment' && (
                <PaymentPage
                    onBackToCart={backToCart}
                    cartTotal={cartTotal}
                />
            )}
        </div>
    );
}

function App() {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '50px', fontSize: '20px' }}>Loading application...</div>;
    }

    return (
        <div className="App">
            {isAuthenticated ? (
                <MainAppContent />
            ) : (
                <LoginPage />
            )}
        </div>
    );
}

export default App;