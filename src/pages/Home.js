import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Team Builder</h1>
      <button onClick={() => navigate('/login')}>Log In</button>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
    </div>
  );
};

export default Home;