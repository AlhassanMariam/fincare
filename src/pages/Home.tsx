import React from 'react';
import { Link } from 'react-router-dom';
import '../components/medfind.css';
// import hero from '../assets/front-view-black-nurses-work.jpg';
import Accordion from 'react-bootstrap/Accordion';


const Home: React.FC = () => {
  return (
    <div>
        <div className='d-flex flex-row align-items-center justify-content-around' id='hero'>
          <div className='hero-1'>
            <h1>Looking for Hospitals or Health Centers in your area?</h1>
            <p>We provide you access and visibility to a whole list of medical centers around you. You can join our ever-growing community by contributing to our list. <Link to='/about' style={{ color: '#194587' }}>Learn more about us</Link></p>
            <Link to="/signup"><button className='hero-btn'>Get Started</button></Link>
          </div>
        </div>
        <div className='d-flex flex-row align-items-center justify-content-center div-home3'>
        <div className='div-home3a'>
          <h3>Hospital Search</h3>
          <p>Easily find hospitals and health centers near you with our comprehensive search tool. Whether you need a specialist or general care, locate the best facilities quickly and efficiently.</p>
          <Link to="/search"><button className='nav-btn'>Continue</button></Link>
        </div>
        <div className='div-home3b'>
          <h3>Add Health Centers Around You</h3>
          <p>Contribute to the community by adding local health centers. Help others find quality care by sharing information about nearby hospitals and clinic</p>
          <Link to="/signup"><button className='nav-btn'>Continue</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;