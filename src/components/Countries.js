import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Countries (){
    const [countries, setCountries] = useState([]);
    

   useEffect(() => {
  axios.get('https://restcountries.com/v3.1/all')
  
    .then(response => {
      console.log(response.data);
      setCountries(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

  return(
<div className='countries'>
{countries.map(country => (
      <div className='country1'
        key={country.name.common}>
        <img  className='flag' 
        src={country.flags.svg} alt={`${country.name.common} flag`}/>
        <h2>{country.name.common}</h2>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
 ))}
</div>
)
}