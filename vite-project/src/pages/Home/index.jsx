import './Home.css'
import { Link } from 'react-router-dom';

const Home = ()=>{
    return(
        <div className='container'>
        <h1>Hostel Records</h1>
        <Link to='/dash'>Login</Link>
        </div>
    )
}

export default Home