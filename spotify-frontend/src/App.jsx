import React, { useState, useContext } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';
import Login from './components/Login'; // Import the Login component

const App = () => {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Player context values
  const { audioRef, track, songsData } = useContext(PlayerContext);

  // Handle login success
  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  // Login page JSX
  const loginPage = <Login onLogin={handleLogin} />;

  // Main app content JSX (for logged-in users)
  const mainAppContent = (
    <div className='h-screen bg-black'>
      {/* Check if there are songs available */}
      {songsData.length !== 0 ? (
        <>
          <div className='h-[90%] flex'>
            <Sidebar />
            <Display />
          </div>
          <Player />
        </>
      ) : (
        <div className="text-white text-center mt-4">
          {/* Display a message when no songs are available */}
          <p>No songs available</p>
        </div>
      )}

      {/* Render the audio element with the current track file */}
      <audio ref={audioRef} src={track ? track.file : ''} preload='auto'></audio>
    </div>
  );

  return (
    <div className="app">
      {/* Conditionally render either the login form or the main app content */}
      {isLoggedIn ? mainAppContent : loginPage}
    </div>
  );
};

export default App;
