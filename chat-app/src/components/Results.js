import React, { useContext, useState } from 'react';
import NoteContext from './NoteContext';
import './ResArea.css';

function Results() {
  const { dist, waste, country, transport, diet, electricity } = useContext(NoteContext);
  const{res,setRes , op , setOp , loading , setLoading,error,setError} = useContext(NoteContext)
  const emissionFactors = {
    World_Average:0.20,
    Afghanistan: 0.18,
    Albania: 0.19,
    Algeria: 0.22,
    Andorra: 0.21,
    Angola: 0.25,
    Argentina: 0.20,
    Armenia: 0.18,
    Australia: 0.19,
    Austria: 0.16,
    Azerbaijan: 0.20,
    Bahamas: 0.21,
    Bahrain: 0.25,
    Bangladesh: 0.14,
    Barbados: 0.22,
    Belarus: 0.18,
    Belgium: 0.17,
    Belize: 0.23,
    Benin: 0.24,
    Bhutan: 0.15,
    Bolivia: 0.22,
    Bosnia_and_Herzegovina: 0.20,
    Botswana: 0.23,
    Brazil: 0.20,
    Brunei: 0.30,
    Bulgaria: 0.19,
    Burkina_Faso: 0.22,
    Burundi: 0.24,
    Cambodia: 0.18,
    Cameroon: 0.23,
    Canada: 0.19,
    Chad: 0.25,
    Chile: 0.18,
    China: 0.22,
    Colombia: 0.21,
    Comoros: 0.22,
    Congo: 0.24,
    Croatia: 0.17,
    Cuba: 0.19,
    Cyprus: 0.20,
    Czech_Republic: 0.18,
    Denmark: 0.15,
    Djibouti: 0.23,
    Dominica: 0.22,
    Dominican_Republic: 0.21,
    Ecuador: 0.20,
    Egypt: 0.23,
    El_Salvador: 0.20,
    Equatorial_Guinea: 0.24,
    Eritrea: 0.25,
    Estonia: 0.19,
    Eswatini: 0.22,
    Ethiopia: 0.20,
    Fiji: 0.23,
    Finland: 0.15,
    France: 0.14,
    Gabon: 0.23,
    Gambia: 0.23,
    Georgia: 0.19,
    Germany: 0.16,
    Ghana: 0.22,
    Greece: 0.18,
    Greenland: 0.24,
    Guatemala: 0.20,
    Guinea: 0.25,
    Guyana: 0.23,
    Haiti: 0.23,
    Honduras: 0.20,
    Hungary: 0.18,
    Iceland: 0.14,
    India: 0.16,
    Indonesia: 0.21,
    Iran: 0.22,
    Iraq: 0.25,
    Ireland: 0.17,
    Israel: 0.20,
    Italy: 0.15,
    Ivory_Coast: 0.23,
    Jamaica: 0.22,
    Japan: 0.17,
    Jordan: 0.20,
    Kazakhstan: 0.23,
    Kenya: 0.20,
    Kiribati: 0.25,
    Korea_South: 0.18,
    Kosovo: 0.20,
    Kuwait: 0.27,
    Kyrgyzstan: 0.22,
    Laos: 0.20,
    Latvia: 0.16,
    Lebanon: 0.21,
    Lesotho: 0.23,
    Liberia: 0.25,
    Libya: 0.24,
    Lithuania: 0.17,
    Luxembourg: 0.15,
    Madagascar: 0.23,
    Malawi: 0.24,
    Malaysia: 0.21,
    Maldives: 0.26,
    Mali: 0.24,
    Malta: 0.16,
    Mauritania: 0.25,
    Mauritius: 0.22,
    Mexico: 0.20,
    Moldova: 0.20,
    Monaco: 0.14,
    Mongolia: 0.24,
    Montenegro: 0.20,
    Morocco: 0.20,
    Mozambique: 0.24,
    Myanmar: 0.21,
    Namibia: 0.23,
    Nepal: 0.16,
    Netherlands: 0.14,
    New_Zealand: 0.18,
    Nicaragua: 0.21,
    Niger: 0.25,
    Nigeria: 0.23,
    North_Macedonia: 0.18,
    Norway: 0.13,
    Oman: 0.26,
    Pakistan: 0.18,
    Panama: 0.21,
    Papua_New_Guinea: 0.24,
    Paraguay: 0.22,
    Peru: 0.19,
    Philippines: 0.20,
    Poland: 0.18,
    Portugal: 0.16,
    Qatar: 0.27,
    Romania: 0.19,
    Russia: 0.21,
    Rwanda: 0.24,
    Samoa: 0.25,
    Saudi_Arabia: 0.28,
    Senegal: 0.22,
    Serbia: 0.20,
    Seychelles: 0.23,
    Sierra_Leone: 0.25,
    Singapore: 0.18,
    Slovakia: 0.17,
    Slovenia: 0.16,
    Somalia: 0.26,
    South_Africa: 0.23,
    Spain: 0.15,
    Sri_Lanka: 0.18,
    Sudan: 0.24,
    Suriname: 0.22,
    Sweden: 0.12,
    Switzerland: 0.14,
    Syria: 0.25,
    Taiwan: 0.18,
    Tajikistan: 0.22,
    Tanzania: 0.23,
    Thailand: 0.20,
    Togo: 0.23,
    Tonga: 0.25,
    Tunisia: 0.20,
    Turkey: 0.19,
    Turkmenistan: 0.25,
    Uganda: 0.23,
    Ukraine: 0.20,
    UAE: 0.27,
    UK: 0.15,
    USA: 0.21,
    Uruguay: 0.18,
    Uzbekistan: 0.23,
    Vanuatu: 0.24,
    Venezuela: 0.20,
    Vietnam: 0.20,
    Yemen: 0.25,
    Zambia: 0.23,
    Zimbabwe: 0.24,
    Default:0
  };
  
  const worldAverage = emissionFactors.World_Average;
  const transportFactors = {
    car: 0.12,        // Average CO2 emissions for a car (kg CO₂ per km)
    bus: 0.05,        // Average CO2 emissions for a bus
    train: 0.03,      // Average CO2 emissions for a train
    plane: 0.25,      // Average CO2 emissions for a flight
    bicycle: 0.01,    // Average CO2 emissions for a regular bicycle
    electric_bike: 0.03,  // Average CO2 emissions for an electric bike
    walk: 0.01,       // Average CO2 emissions for walking (very low)
    motorcycle: 0.15, // Average CO2 emissions for a petrol bike (gasoline motorcycle)
    electric_car: 0.05, // Average CO2 emissions for an electric car
    scooter: 0.08,    // Average CO2 emissions for an electric scooter
    tram: 0.02,      
    ferry: 0.18,     
    subway: 0.03,
    bike:0.15 ,
    Default:0.03    
};

  const dietFactors = {
    Vegetarian: 0.02,
    NonVegetarian: 0.1,
    Vegan: 0.015,
    Default: 0.05
  };

  const electricityFactor = 0.5; 

  const fetchCountryData = async (countryName) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`);
      const data = await response.json();
      return data[0];
    } catch {
      throw new Error('Failed to fetch country data.');
    }
  };

  const genRes = async () => {
    setLoading(true);
    setError('');
    try {
      if (!dist || !waste || !country || !transport || !diet || !electricity) {
        throw new Error("Please provide all the necessary inputs.");
      }

      const emissionFactor = emissionFactors[country] || emissionFactors.Default;
      const transportFactor = transportFactors[transport.toLowerCase()] || transportFactors.car;
      const dietFactor = dietFactors[diet] || dietFactors.Default;
      const wasteFactor = 0.1;
      const electricityEmissions = electricity * electricityFactor;

      const result = (dist * transportFactor) + (waste * wasteFactor) + (dist * emissionFactor) + (dietFactor *3*365) + electricityEmissions;
      setRes(result.toFixed(2));
      setOp(true);
    } catch (err) {
      alert(err.message || 'An error occurred while calculating the result.');
    } finally {
      setLoading(false);
    }
  };
  const {mode} = useContext(NoteContext)
  let averageCF= (15000 * 0.21) + (500* 0.21) + (15000 * emissionFactors[country]) + (dietFactors.NonVegetarian*3* 365) + 1200;
  averageCF = Math.floor(averageCF % 10);;
  let avgWorld = (20000 * 0.21) + (500* 0.21) + (15000 * worldAverage) + (dietFactors.NonVegetarian*3* 365) + 1200;
  avgWorld = Math.floor(avgWorld % 10);
    const resTxt = (res) => {
    const rating = (10 - Math.floor(res % 10)) ;
    let emoji = '';
    if (rating >= 8) emoji = '😊';
    else if (rating >= 6) emoji = '🙂';
    else if (rating >= 4) emoji = '😐';
    else emoji = '😰';
    const avgRating = Math.min(10, Math.max(1, Math.floor(10 - averageCF /5000)))
    return (
      <div className={`res-txt${mode}`}>
        <h1>Your estimated carbon footprint is
          <span className={`rating-val${mode}`}> {res} </span> kg CO₂</h1>
        <h1>Your Carbon footprint Rating is 
          <span className={`rating-val${mode}`}> {rating} </span>
        </h1>
        <div>
          <h1>{emoji}</h1>
        </div>
        <meter className='green-meter' value={rating} min="0" max="10" data-rating={rating}></meter>
        <h1>Average Carbon Footprint Rating for {country} </h1>
        <meter className='green-meter' value={avgRating} min="0" max="10" data-rating={avgRating}></meter>
        <h1> Average World Carbon Footprint Rating  </h1>
        <meter className='green-meter' value={avgWorld} min="0" max="10" data-rating={avgWorld}></meter>
        <p className='explain-txt'><strong>Understanding your carbon footprint is the first step towards reducing your environmental impact. Here are some tips to reduce your CO₂ emissions: </strong></p>
        <ul>
          <li><strong>Use public transportation:</strong> Switching to buses, trains, or subways can drastically lower your emissions compared to individual car travel.</li>
          <li><strong>Choose eco-friendly transport:</strong> Opt for bicycles, electric scooters, or electric vehicles that have lower or zero emissions.</li>
          <li><strong>Carpool:</strong> Share rides with others to reduce the number of vehicles on the road and decrease the total emissions.</li>
          <li><strong>Walk or bike:</strong> For short trips, consider walking or cycling, which have minimal environmental impact.</li>
          <li><strong>Reduce waste:</strong> Proper waste management and reducing consumption can help lower your overall carbon footprint.</li>
          <li><strong>Choose renewable energy:</strong> When possible, power your home and transport with renewable energy sources like solar or wind.</li>
        </ul>
        <p>By incorporating these small changes into your daily routine, you can contribute to a more sustainable and eco-friendly world.</p>
      </div>
    );
  }

  return (
    <div className="res">
      <button onClick={genRes} className="genButton" disabled={loading}>
        {loading ? 'Calculating...' : 'Generate Result'}
      </button>
      {op && !error && resTxt(res)}
    </div>
  );
}

export default Results;
