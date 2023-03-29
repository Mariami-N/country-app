import React from 'react';
import { useState } from 'react';

function Details({ country, onGoBack , countries, fetched,setCountry }) {
  // const [showpage, setShowPage] =useState (false);
  // const [country1, setCountry1] = useState({});
  // console.log(Object.values(country.name.nativeName)[0].common);
  let nativeName = fetched && Object.values(country.name.nativeName)[0].common;
  
   
  // let border = country.borders !== undefined ? Object.values(country.borders) : ''
  
  let bordersCountry = []
  if(fetched){
    country.borders &&
    countries.forEach((item) => {
      country.borders.forEach((bord) =>{
      if (item.fifa == bord){
        bordersCountry.push(item.name.common)
      }
    })
    });
  }
 
  const handleClick = (item) => {
    countries.map((count)=>{
      if(count.name.common === item){
         setCountry(count)
        return count
      }
    })
   
  
  }

  // console.log(country);
  return (
    <>
    
    <button className='goback' onClick={onGoBack}>Go Back</button>
<div className="country-details">
        <div className='flagDiv'>
            <img className='flagphoto' 
            src={country.flags.png} alt={`${country.name.common} flag`} />
        </div>

  <div className='detall'>
          <div className='title'>
            <h2>{country.name.common}</h2>
          </div>
      <div className='detail1'>
        <p>Native Name: {nativeName}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Sub Region: {country.subregion}</p>
        <p>Capital: {country.capital}</p>
      </div>
  </div>
      
     <div className='detail2'>
        <p>Top Level Domain: {country.tld}</p>
        <p>Currencies: {Object.values(country.currencies)[0].name}</p>
        <p>Languages: {Object.values(country.languages)[0]}</p>
     </div>
     <p className=' bordercount'>Border Countries: {bordersCountry.map ((item) => {
            return (
              <div className='contrybutton'>
                  <button  onClick={()=>handleClick(item)}
                  className='contryN'>{item} 
                  </button>
              </div>
            )
        })}
      </p>
</div>
    </>
  );
}

export default Details; 


// let info = require('./data.json') es tu dagvjirdeba 