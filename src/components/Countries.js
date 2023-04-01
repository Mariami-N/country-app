import axios from 'axios';
import { useState, useEffect } from 'react';
import photo from '../images/Shape(1).png';
import Details from '../components/Details'


export default function Countries (){
    const [countries, setCountries] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [showpage, setShowPage] =useState (false);
    const [country, setCountry] = useState({});
    const [fetched, setFetched] = useState(false)

   useEffect(() => {
  axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      // console.log(response.data);
      setFetched(true)
      setCountries(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

console.log(countries);
const filteredCountries = countries.filter((country) => {
  return country.name.common.toLowerCase().includes(searchValue.toLowerCase()) &&
  (selectedRegion === 'All' || country.region === selectedRegion);
}); 

const handleRegionChange = (event) => {
  setSelectedRegion(event.target.value);
};

const handleClick = (country) => {
  setCountry(country);
  setShowPage(true);
}

return (
  <>
   {showpage ? (
             <Details country={country}
             onGoBack={() => setShowPage(false)}
             fetched={fetched}
             countries={countries}
             setCountry={setCountry}
           />
            ) : (
  <div className="countries">
    <div className='filters'>
      <div className='search'>
      <img src={photo} alt="loup"/>
        <input type='search' placeholder='Search for a country…' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <div className='regiondiv'>
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antarctic</option>
        </select>
    </div>
    </div>
  
    <div className='country-list'>
      {filteredCountries.map((country) => (
        <div className='country' 
        key={country.name.common}>
          <div className='flagimg'>
            <img className='flag' 
            onClick={() => handleClick(country)}
            src={country.flags.png} alt={`${country.name.common} flag`} />
          </div>
          <div className='det'>
            <h2>{country.name.common}</h2>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )} 
  </>
);
}

