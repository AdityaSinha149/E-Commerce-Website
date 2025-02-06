import React from 'react';

const Homepage = () => {
  const userName = "Mist";  // Placeholder for a real user's name

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      <p>This is the homepage. You are now signed in.</p>
      <button onClick={() => alert('Logging out...')}>Log Out</button>
    </div>
  );
}

export default Homepage;
