import { useNavigate } from 'react-router-dom'; 
import './Home.css';
import Button from '@mui/material/Button';

const Home = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/products/list'); 
  };

  const handleAddPage = () =>{
    navigate('/products/create')
  }

  return (
    <div className="home-page">
      <h1>Welcome to My Store!</h1>
      <p>Explore our products:</p>
      
      <div style={{margin:"5px"}}><Button variant="contained" onClick={handleClick}>View Products</Button></div>
        <div><Button variant="contained" onClick={handleAddPage}>Add Product</Button></div>
      
    </div>
  );
};

export default Home;
