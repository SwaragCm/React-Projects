import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductList from './pages/ProductList'
import Home from './pages/Home';
import ProductAdd from './pages/ProductAdd'


function App() {
  return (
    <>
    <Router>
      <Routes> 
        <Route path='/' element={<Home/>}/>       
        <Route path='/products/list' element={<ProductList/>}/>
        <Route path='/products/create' element={<ProductAdd/>}/>
      </Routes>
      </Router>

    </>
  )
}

export default App
