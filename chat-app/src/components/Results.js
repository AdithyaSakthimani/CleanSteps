import React, { useContext, useState } from 'react';
import NoteContext from './NoteContext';
import './ResArea.css';

function Results() {
  const { dist, waste, country, transport, diet, electricity } = useContext(NoteContext);
  const{res,setRes , op , setOp , loading , setLoading,error,setError} = useContext(NoteContext)
  const emissionFactors = {
    Afghanistan: 0.18,
    Albania: 0.19,
    Algeria: 0.22,
    Default: 0
  };

  const transportFactors = {
    car: 0.12,
    bus: 0.05,
  };

  const dietFactors = {
    Vegetarian: 0.02,
    NonVegetarian: 0.1,
    Vegan: 0.015,
    Default: 0.05
  };

  const electricityFactor = 0.5;  // Example value: global emission factor for electricity consumption

  // Function to reset results before generating new one

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

      const result = (dist * transportFactor) + (waste * wasteFactor) + (dist * emissionFactor) + (dietFactor * 365) + electricityEmissions;
      setRes(result.toFixed(2));
      setOp(true);
    } catch (err) {
      alert(err.message || 'An error occurred while calculating the result.');
    } finally {
      setLoading(false);
    }
  };
  const {mode} = useContext(NoteContext)
    const resTxt = (res) => {
    const rating = Math.min(10, Math.max(1, Math.floor(10 - res / 500)));
    let emoji = '';
    if (rating >= 8) emoji = '😊';
    else if (rating >= 6) emoji = '🙂';
    else if (rating >= 4) emoji = '😐';
    else emoji = '😰';
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
