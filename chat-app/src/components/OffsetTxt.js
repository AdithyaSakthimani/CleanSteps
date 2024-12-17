import React, { useContext } from 'react';
import './OffsetStyle.css';
import NoteContext from './NoteContext';

function OffsetTxt() {
  const{mode} = useContext(NoteContext)
  return (
    <div className={`offset-container${mode}`}>
      <h1 className="offset-heading">What is Carbon Offsetting?</h1>
      <p className="offset-text">
        Carbon offsetting involves reducing carbon dioxide (CO₂) emissions to compensate for emissions produced elsewhere. 
        It helps in fighting climate change by funding projects like reforestation, renewable energy, and carbon capture.
      </p>

      <h2 className="offset-subheading">How You Can Contribute</h2>
      <ul className="offset-list">
        <li>Support tree planting initiatives and reforestation projects 🌳.</li>
        <li>Invest in renewable energy sources like solar or wind power ⚡.</li>
        <li>Offset your travel emissions through certified carbon offset programs ✈️.</li>
        <li>Adopt a sustainable lifestyle: reduce, reuse, and recycle ♻️.</li>
        <li>Opt for energy-efficient appliances to reduce your carbon footprint 🏠.</li>
      </ul>

      <h2 className="offset-subheading">Why Carbon Offsetting Matters</h2>
      <p className="offset-text">
        By actively offsetting your carbon footprint, you help mitigate climate change, improve air quality, and promote biodiversity. 
        Every small effort contributes to a greener and more sustainable planet 🌍.
      </p>

      <div className="callToAction">
        <p className="ctaText">Start your journey towards carbon neutrality today!</p>
        <a href="https://offset.climateneutralnow.org/aboutoffsetting" target="_blank" rel="noopener noreferrer">
          <button className=" learn-button">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
}

export default OffsetTxt;
