// src/components/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';
import './LoginPage.css';

function LoginPage({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.fontFamily = 'Arial, sans-serif';
        document.body.style.background = 'linear-gradient(to right, #6a11cb, #2575fc)';
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.minHeight = '100vh';
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.margin = '';
            document.body.style.fontFamily = '';
            document.body.style.background = '';
            document.body.style.display = '';
            document.body.style.justifyContent = '';
            document.body.style.alignItems = '';
            document.body.style.minHeight = '';
            document.body.style.overflow = '';
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage('Login successful!');
            if (onLoginSuccess) {
                onLoginSuccess();
            }
        } catch (error) {
            setMessage(`Login failed: ${error.message}`);
            console.error("Login error:", error);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {message && <div className="flash">{message}</div>}

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;