import image from './images/Path.png'
import { useState } from 'react';
import './App.css';
import Countries from './components/Countries';


function App() {
  const [darkMode, setDarkMode] = useState(false);
 
  const toggleDarkMode  = () => {
    setDarkMode(!darkMode);
  }

  return (
   <>
   <div 
   style={{bgcolor:"#F2F2F2"}}
   className={`container ${darkMode ? 'dark' : '' }`}>
    <header>
      <h1>Where in the world?</h1>
      <div className='moonlight'>
        <img src={image} alt="moon" onClick={toggleDarkMode } />
        <p> {darkMode ? 'Light Mode' : 'Dark Mode' }</p>
      </div>
    </header>
    <Countries/>
   </div>
   </>
  );
}

export default App;
