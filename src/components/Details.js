import React from 'react';

function Details({ country, onGoBack   }) {
  return (
    <>
    <button  onClick={onGoBack}>Go Back</button>
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
        <p>Native Name: {country.name.nativeName.common}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Sub Region: {country.subregion}</p>
        <p>Capital: {country.capital}</p>
      </div>
  </div>
      
     <div className='detail2'>
      <p>Top Level Domain: {country.tld}</p>
      <p>Currencies: {country.currencies[0]}</p>
      <p>Languages: {country.languages.eng}</p>
      <p>Border Countries: {country.border}</p>
     </div>
     
</div>
    </>
  );
}

export default Details; 


