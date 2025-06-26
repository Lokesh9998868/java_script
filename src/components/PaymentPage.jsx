// src/components/PaymentPage.jsx
import React, { useState } from 'react';
import './PaymentPage.css';
// Import icons from lucide-react (these are for visual representation)
import { Wallet, CreditCard, Banknote, QrCode, ChevronLeft } from 'lucide-react';

function PaymentPage({ onBackToCart, cartTotal }) { // cartTotal prop added
    // State to manage the active payment tab
    const [activeTab, setActiveTab] = useState('upi'); // Default to UPI

    // State for dummy payment inputs (not for actual processing)
    const [upiId, setUpiId] = useState('');
    const [cardNumber, setCardNumber] = useState(''); // Corrected to useState('')
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [selectedBank, setSelectedBank] = useState('');

    const handleConfirmPayment = () => {
        // This is a placeholder for actual payment processing.
        console.log('Attempting to confirm payment...');
        console.log('Active method:', activeTab);
        console.log('Total Amount:', cartTotal); // Log total for debugging
        if (activeTab === 'upi') {
            console.log('UPI ID:', upiId);
            alert(`UPI payment for ₹${cartTotal.toFixed(2)} initiated! (Dummy)`);
        } else if (activeTab === 'wallets') {
            alert(`Wallet payment for ₹${cartTotal.toFixed(2)} initiated! (Dummy)`);
        } else if (activeTab === 'cards') {
            console.log('Card details:', cardNumber, cardExpiry, cardCvv);
            alert(`Card payment for ₹${cartTotal.toFixed(2)} initiated! (Dummy)`);
        } else if (activeTab === 'netbanking') {
            console.log('Selected Bank:', selectedBank);
            alert(`Net Banking payment for ₹${cartTotal.toFixed(2)} initiated! (Dummy)`);
        } else if (activeTab === 'cod') {
            alert(`Cash on Delivery for ₹${cartTotal.toFixed(2)} confirmed! (Dummy)`);
        }
    };

    return (
        <div className="payment-page-container">
            <header className="payment-header">
                <button onClick={onBackToCart} className="back-button">
                    <ChevronLeft size={20} /> Back to Cart
                </button>
                <h1>Choose Payment Method</h1>
            </header>

            <main className="payment-options-section">
                <div className="payment-tabs">
                    <button
                        className={`tab-button ${activeTab === 'upi' ? 'active' : ''}`}
                        onClick={() => setActiveTab('upi')}
                    >
                        <QrCode size={20} /> UPI
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'wallets' ? 'active' : ''}`}
                        onClick={() => setActiveTab('wallets')}
                    >
                        <Wallet size={20} /> Wallets
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'cards' ? 'active' : ''}`}
                        onClick={() => setActiveTab('cards')}
                    >
                        <CreditCard size={20} /> Credit/Debit Card
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'netbanking' ? 'active' : ''}`}
                        onClick={() => setActiveTab('netbanking')}
                    >
                        <Banknote size={20} /> Net Banking
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'cod' ? 'active' : ''}`}
                        onClick={() => setActiveTab('cod')}
                    >
                        Cash on Delivery
                    </button>
                </div>

                <div className="tab-content">
                    {/* UPI Payment Option */}
                    {activeTab === 'upi' && (
                        <div className="payment-method-panel">
                            <h2>Pay with UPI</h2>
                            <div className="upi-options">
                                <button className="upi-app-button">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZM6v1NshuD1PnfpNNYEqIt0xbbjHxFXzUg&s" alt="Google Pay" />
                                    Google Pay
                                </button>
                                <button className="upi-app-button">
                                    <img src="https://i.pinimg.com/736x/db/42/53/db4253052cfc0f80ac281486c19f9d57.jpg" alt="PhonePe" />
                                    PhonePe
                                </button>
                                <button className="upi-app-button">
                                    <img src="https://cdn.pixabay.com/photo/2021/04/03/03/20/paytm-6146408_1280.png" alt="Paytm" />
                                    Paytm UPI
                                </button>
                            </div>
                            <div className="input-group">
                                <label htmlFor="upi-id">Enter UPI ID:</label>
                                <input
                                    type="text"
                                    id="upi-id"
                                    placeholder="yourname@bankupi"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value)}
                                />
                                <button className="verify-button">Verify</button>
                            </div>
                        </div>
                    )}

                    {/* Wallets Payment Option */}
                    {activeTab === 'wallets' && (
                        <div className="payment-method-panel">
                            <h2>Pay with Wallets</h2>
                            <button className="wallet-button">
                                <img src="https://companieslogo.com/img/orig/PAYTM.NS-5085d706.png?t=1664539825" alt="Paytm" />
                                Paytm Wallet
                            </button>
                            <button className="wallet-button">
                                <img src="https://static.phonepe.com/img/phonepe-logo.png" alt="PhonePe" />
                                PhonePe Wallet
                            </button>
                            <button className="wallet-button">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Amazon_Pay_logo.svg/1280px-Amazon_Pay_logo.svg.png" alt="Amazon Pay" />
                                Amazon Pay
                            </button>
                        </div>
                    )}

                    {activeTab === 'cards' && (
                        <div className="payment-method-panel">
                            <h2>Pay with Credit/Debit Card</h2>
                            <div className="card-input-group">
                                <label htmlFor="card-number">Card Number</label>
                                <input
                                    type="text"
                                    id="card-number"
                                    placeholder="XXXX XXXX XXXX XXXX"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    maxLength="19"
                                />
                            </div>
                            <div className="card-expiry-cvv-group">
                                <div className="input-group">
                                    <label htmlFor="card-expiry">Expiry (MM/YY)</label>
                                    <input
                                        type="text"
                                        id="card-expiry"
                                        placeholder="MM/YY"
                                        value={cardExpiry}
                                        onChange={(e) => setCardExpiry(e.target.value)}
                                        maxLength="5"
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="card-cvv">CVV</label>
                                    <input
                                        type="text"
                                        id="card-cvv"
                                        placeholder="XXX"
                                        value={cardCvv}
                                        onChange={(e) => setCardCvv(e.target.value)}
                                        maxLength="4"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'netbanking' && (
                        <div className="payment-method-panel">
                            <h2>Pay with Net Banking</h2>
                            <div className="input-group">
                                <label htmlFor="bank-select">Select Your Bank:</label>
                                <select
                                    id="bank-select"
                                    value={selectedBank}
                                    onChange={(e) => setSelectedBank(e.target.value)}
                                >
                                    <option value="">-- Select Bank --</option>
                                    <option value="sbi">State Bank of India</option>
                                    <option value="hdfc">HDFC Bank</option>
                                    <option value="icici">ICICI Bank</option>
                                    <option value="axis">Axis Bank</option>
                                    <option value="kotak">Kotak Mahindra Bank</option>
                                    <option value="pnb">Punjab National Bank</option>
                                </select>
                            </div>
                            <p className="note-text">You will be redirected to your bank's website.</p>
                        </div>
                    )}

                    {activeTab === 'cod' && (
                        <div className="payment-method-panel">
                            <h2>Cash on Delivery</h2>
                            <p className="cod-info-text">
                                Pay with cash when your order arrives at your doorstep.
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <footer className="payment-footer">
                {/* Display the total amount here */}
                <div className="total-amount-display">
                    Total Amount: <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <button className="confirm-payment-button" onClick={handleConfirmPayment}>
                    Confirm Payment
                </button>
            </footer>
        </div>
    );
}

export default PaymentPage;