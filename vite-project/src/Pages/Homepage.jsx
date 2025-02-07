import React from 'react';
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const userName = "Mist";  // Placeholder for a real user's name
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      <p>This is the homepage. You are now signed in.</p>
      <button onClick={() => navigate('/')}>Log Out</button>
    </div>
  );
}

export default Homepage;
