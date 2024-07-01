import { useNavigate } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/products'); 
  };

  return (
    <div className="home-page">
      <h1>Welcome to My Store!</h1>
      <p>Explore our products:</p>
      <button onClick={handleClick}>View Products</button> 
    </div>
  );
};

export default Home;
