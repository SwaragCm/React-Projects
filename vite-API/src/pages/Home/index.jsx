import { useNavigate } from 'react-router-dom'; 
import './Home.css';
import Button from '@mui/material/Button';

const Home = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/products'); 
  };

  return (
    <div className="home-page">
      <h1>Welcome to My Store!</h1>
      <p>Explore our products:</p>
      <Button variant="contained" onClick={handleClick}>View Products</Button>
    </div>
  );
};

export default Home;
