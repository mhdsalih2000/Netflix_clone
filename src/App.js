import React from 'react';
import './App.css';
import NavBar from './Component/Navbar/NavBar';
import Banner from './Component/Banner/Banner.js';
import RawPost from './Component/RawPost/RawPost.js';
import { originals,Actions,Horror,Comody,Romance } from './Constants/url.js'; 







function App() {
  
  return (
    
    <div>
    
    <NavBar/>
    <Banner/>
    <RawPost url={originals}  title ="Netflix Originals"  />
    <RawPost url={Actions}  title ="Actions" isSmall/>
    <RawPost url={Horror}  title ="Horror" isSmall/>
    <RawPost url={Comody}  title ="Comody" isSmall/>
    <RawPost url={Romance}  title ="Romanace" isSmall/>
    

    </div>
  );
}

export default App;
