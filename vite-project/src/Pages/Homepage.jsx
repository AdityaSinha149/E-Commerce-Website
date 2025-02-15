import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar';
import { NumContext } from '../Contexts/NumContext';

const Homepage = () => {
  const navigate = useNavigate()
  const { prevNum } = useContext(NumContext);

  return (
    <div>
      <NavBar />
      <h1>Welcome, {prevNum.split("@")[0]}!</h1>
      <p>This is the homepage. You are now signed in.</p>
      <button onClick={() => navigate('/')}>Log Out</button>
    </div>
  );
}

export default Homepage;
