import React from 'react';
import { Link } from 'react-router-dom';
import './medfind.css'

const Footer: React.FC = () => {
  return (
    <footer className='footer-container'>
      <div className='d-flex flex-row align-items-start justify-content-between'>
        <div className='footer-div1'>
        <Link to ="/"><h2>FINDCARE</h2></Link>
        <p>Bringing Healthcare Closer to You. Discover and explore nearby health centers across all categories, and contribute by adding new hospitals to our growing community.</p>
        <Link to='mailto:hello@findcare.org'><p>hello@findcare.org</p></Link>
        </div>
        <div className='footer-div2'>
          <h3>Services</h3>
          <Link to="/search"><p>Find Health Centers</p></Link>
          <Link to="/signup"><p>Add Health Centers</p></Link>
        </div>
        <div className='footer-div3'>
          <h3>Company</h3>
          <Link to="/about"><p>About Us</p></Link>
          <Link to="/contact"><p>Contact Us</p></Link>
        </div>
      </div>
      <div className='footer-div4'>
        <p>Copyright © 2024 Findcare, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
