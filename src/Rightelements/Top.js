import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Aboutme from '../navitems/Aboutme';
import Experience from '../navitems/Experience';
import Recommended from '../navitems/Recommended';
import img1 from '../assets/Vector.png'
import img2 from '../assets/img2.png'

export default function Top() {
  return (
    <div className="top">
        <img src={img1} alt='question mark' className='img1'/>
      <Navbar />
      <div className="content">
      <img src={img2} alt='question mark' className='img2'/>
        <Routes>
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/recommended" element={<Recommended />} />
        </Routes>
      </div>
    </div>
  );
}
