import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple username and password check for demonstration
    if (username === 'user' && password === '1234') {
      onLogin(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-800'>
      <form onSubmit={handleLogin} className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm'>
        {/* Logo */}
        <div className='flex justify-center mb-6'>
          <img
            src='https://i.pinimg.com/736x/14/8b/28/148b28a3992349e8db92184c65d24bbd.jpg' // Replace with your logo image path
            alt='App Logo'
            className='w-20 h-20'  // Adjust logo size
          />
        </div>

        {/* Welcome Message */}
        <h2 className='text-2xl text-center font-semibold mb-4'>Welcome to Spotify</h2>

        {/* Username input */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='block w-full p-3 mb-4 border border-gray-300 rounded-md'
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='block w-full p-3 mb-4 border border-gray-300 rounded-md'
        />

        {/* Login Button */}
        <button type="submit" className='w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
