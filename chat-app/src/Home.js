import React, { useContext } from 'react';
import './Home.css';
import Navbar from './components/Navbar';
import NoteContext from './components/NoteContext';
import Nature from './components/images/1bc3ce2e-02d1-4631-8db6-acb70d966319.jpg'
import flowers from './components/images/73b98e27-27a0-4116-b464-9bf26a94c44b.jpg';
import redFlower from './components/images/a273afe9-b90b-4f61-a86e-a60035dc8cee.jpg'
import { Link } from 'react-router-dom';
function Home() {
  const { mode } = useContext(NoteContext);

  return (
    <div className={`home-container${mode}`}>
      <div className={`navbar${mode}`}>
        <Navbar />
      </div>

      <div className='main'>
      <div className="image-container">
        <img src={redFlower} className='redFlower-icon'/>
        <img src={flowers} alt="flowers
        " className="flower-icon" />
        <img src={Nature} className='redFlower-icon'/>
        </div>
        <div className='heading-txt'>
        <h1 className="heading">Welcome to Clean Steps</h1>
        <p className="intro-text">
          Track your carbon footprint and take meaningful steps toward a more sustainable future. 
          By understanding the impact of your daily activities, you can make informed decisions 
          to reduce your environmental footprint.
        </p>
        </div>
      </div>
      <div className='features'> 
      <div className='feature1'>
      <h2 className='CF-head'>Carbon Footprint</h2>
          <p>
            A carbon footprint is the total amount of greenhouse gases emitted due to human activities, 
            such as transportation, energy use, and food production. Tracking your carbon footprint helps you 
            understand your environmental impact.
          </p>
      <Link to = '/footprint' className='foot-link' onClick={() => window.scrollTo(0, 0)}>
      <button className='footprint-button'>
      Calculate Your Carbon Footprint
      </button>
      </Link>
      </div>
      <div className='feature3'>
      <h2 className='CO-head'>Eco ChatRoom</h2>
          <p>
          an environment-related chat room which serves as a virtual space for individuals to connect, discuss, learn, and take action on environmental issues, aiming to make a positive impact on the world. It can be a valuable tool for both raising awareness and promoting tangible environmental change.
          </p>
          <Link to = '/chatspace' className='off-link' onClick={()=>window.scrollTo(0, 0)}>
      <button className='offset-button'>
        Connect With People
      </button>
      </Link>
      </div>
      <div className='feature2'>
      <h2 className='CO-head'>Carbon offset</h2>
          <p>
          Carbon offsetting is the practice of compensating for emissions produced by funding projects 
          that reduce or capture greenhouse gases. Investing in carbon offset projects, such as reforestation 
          or renewable energy, helps balance your carbon emissions.
          </p>
          <Link to = '/offset' className='off-link' onClick={()=>window.scrollTo(0, 0)}>
      <button className='offset-button'>
        Learn About Offsetting
      </button>
      </Link>
      </div>
      </div>
      </div>
  );
}

export default Home;
