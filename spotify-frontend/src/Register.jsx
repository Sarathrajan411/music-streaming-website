import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // If using react-router for routing

const Register = () => {
    // State to manage form input
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // Error message state
    const history = useHistory(); // Hook for navigation after successful registration

    // Handle form submission
    const handleRegister = (e) => {
        e.preventDefault();

        // Reset any previous error messages
        setError('');

        // Basic validation for email format (simple regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Password match validation
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        // Check password strength (example: minimum 8 characters)
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        // Registration logic here (e.g., API call or Firebase)
        console.log('Registering:', email, username, password);

        // On successful registration, redirect to the login page
        history.push('/login');
    };

    return (
        <div className="login-container">
            <div className="login-head">
                <h1>Sign up for Spotify</h1>
            </div>

            {/* Display error message if exists */}
            {error && <div className="error-message">{error}</div>}

            {/* Registration form */}
            <form onSubmit={handleRegister} className="login-content">
                <div className="email-input-box">
                    <label htmlFor="email" className="email-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="email-input"
                        placeholder="Email"
                        required
                    />
                </div>

                <div className="email-input-box">
                    <label htmlFor="username" className="email-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="email-input"
                        placeholder="Username"
                        required
                    />
                </div>

                <div className="password-input-box">
                    <label htmlFor="password" className="password-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="password-input"
                        placeholder="Password"
                        required
                    />
                </div>

                <div className="password-input-box">
                    <label htmlFor="confirmPassword" className="password-label">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="password-input"
                        placeholder="Confirm Password"
                        required
                    />
                </div>

                <div className="login-button">
                    <button type="submit" className="login-btn">Sign Up</button>
                </div>
            </form>

            <div className="signUp">
                <span className="signUp-txt">
                    Already have an account? <a href="/login">Log in to Spotify</a>
                </span>
            </div>
        </div>
    );
};

export default Register;
