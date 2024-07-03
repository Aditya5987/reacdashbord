
import { useState } from 'react';
import './App.css';
// import { Select, MenuItem, FormControl, InputLabel} from '@mui/material'
// import Sidenav from './Sidenav';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Settings from './Pages/Settings';


function App() {


 
  return (
    <>
    <div className='App'>

      <BrowserRouter>
      <Routes>
        <Route path='/' exact  element={<Home/>}></Route>
        <Route path='/about' exact element={<About/>}></Route>
        <Route path='/settings' exact element={<Settings/>}></Route>
      </Routes>
      </BrowserRouter>
    
    {/* <Sidenav></Sidenav> */}

    </div>

    </>
 
  );
}

export default App;
