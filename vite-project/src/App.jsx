import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
function App() {

  const [value, setValue] = useState([
    { id: 1, name: "Arun", age: 30, city: "Kozhikode" },
  ]);

  const moreData = [
    { id: 2, name: "Alan", age: 25, city: "Kollam" },
    { id: 3, name: "Fazil", age: 35, city: "Kochi" },
    { id: 4, name: "Rajiv", age: 28, city: "Kochi" },
    { id: 5, name: "Nick", age: 32, city: "Wayanad" },
    { id: 6, name: "Zamil", age: 27, city: "Kannur" },
  ];

  const [index, setIndex] = useState(0);

  const addObjectToTable = () => {
    if (index < moreData.length) {
      
      setValue([...value, moreData[index]]);
      console.log("index :",index);
      console.log("moredata :",moreData[index]);
      setIndex(index + 1); 
      // Increment index to add the next item on next click

      if (index === moreData.length - 1) {
          // Hide the button by setting index to a large number
          console.log(moreData.length);
          setIndex(Number.MAX_VALUE);
        }

    }
  };


  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dash' element={<Dashboard value={value} addObjectToTable={addObjectToTable} index={index} moreData={moreData}/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
