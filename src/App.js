import image from './images/Path.png'
import photo from './images/search.svg'
import { useState } from 'react';
import './App.css';
import Countries from './components/Countries';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };
  return (
   <>
   <div className='container'>
    <header>
      <h1>Where in the world?</h1>
      <img src={image} alt="moon"/>
      <p> Dark Mode</p>
    </header>
    <div className='search'>
      <img src={photo} alt="loop"/>
    <input type="search" placeholder='Search for a country…' />
    </div>
      <select id="region-filter" value={selectedRegion} onChange={handleRegionChange}>
        <option value="Filter by Region">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    <Countries/>
   </div>
   </>
  );
}

export default App;
