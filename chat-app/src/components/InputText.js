import React, { useState, useContext, useEffect, useRef } from 'react';
import NoteContext from './NoteContext';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './InputFile.css';

function InputText() {
  const {
    dist,
    waste,
    setDist,
    setWaste,
    days,
    setDays,
    setTransport,
    transport,
    country,
    setCountry,
    diet,
    setDiet,
    electricity,
    setElectricity,
  } = useContext(NoteContext);

  // Create a reference for the map
  const mapRef = useRef(null);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    // Initialize the map only once
    if (mapRef.current === null) {
      // Initialize the map
      const map = L.map('map',{ attributionControl: false }).setView([20, 0], 2); // Center at a global view

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      // Make the zoom controls sticky
      const zoomControl = document.querySelector('.leaflet-control-zoom');

      // Add a click event to get the country based on coordinates
      map.on('click', async (e) => {
        const { lat, lng } = e.latlng;
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
        const data = await response.json();
        if (data.address && data.address.country) {
          setCountry(data.address.country);
        }
      });

      // Store map reference to prevent re-initialization
      mapRef.current = map;
    }
  }, [setCountry]);

  const { click ,setRes , setOp , setLoading , setError} = useContext(NoteContext);
  const resetResults = () => {
    setRes(0);
    setOp(false);
    setLoading(false);
    setError('');
  };
  const handleChangeDist = (e) => {
    const value = e.target.value;
    setDist(value);
    resetResults(); 
  };

  const handleChangeWaste = (e) => {
    setWaste(e.target.value);
  };

  const handleChangetransport = (e) => {
    setTransport(e.target.value);
  };

  const handleChangeDays = (e) => {
    setDays(e.target.value);
  };

  const handleChangeDiet = (e) => {
    setDiet(e.target.value);
  };

  const handleChangeElectricity = (e) => {
    setElectricity(e.target.value);
  };
  const{mode} = useContext(NoteContext);
  return (
    <div>
      <div className={`input-options${mode}`}>
        <h1>Select Country</h1>
        <div id="map"></div>
        <p className='cont'><strong>Selected Country :  </strong><span>{country}</span></p>

        <h1>Annual Commute Distance in Km</h1>
        <input
          type="number"
          value={dist}
          onChange={handleChangeDist}
          className={`dist${(dist === 0 && click) ? 'invalid' : ''}`}
        />

        <h1>Mode of Transport</h1>
        <input
          type="text"
          value={transport}
          onChange={handleChangetransport}
          placeholder="e.g., Car, Bike"
          className={`dist${(transport === '' && click) ? 'invalid' : ''}`}
        />

        <h1>Annual Travel Days</h1>
        <input
          type="number"
          value={days}
          onChange={handleChangeDays}
          className={`dist${(days === 0 && click) ? 'invalid' : ''}`}
        />

        <h1 className = 'waste-title'>Annual Waste Produced in Kg</h1>
        <input
          type="number"
          value={waste}
          onChange={handleChangeWaste}
          className={`dist${(waste === 0 && click) ? 'invalid' : ''}`}
        />

        <h1>Diet</h1>
        <select
          value={diet}
          onChange={handleChangeDiet}
          className={`diet${(diet === '' && click) ? 'invalid' : ''}`}
        >
          <option value="">Select Diet</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Pescatarian">Pescatarian</option>
        </select>

        <h1> Annual Electricity Consumed (kWh)</h1>
        <input
          type="number"
          value={electricity}
          onChange={handleChangeElectricity}
          className={`dist${(electricity === 0 && click) ? 'invalid' : ''}`}
        />
      </div>
    </div>
  );
}

export default InputText;
