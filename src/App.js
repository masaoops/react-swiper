import React from 'react';
import Slider from './components/Slider.js'
import './App.css';

// this data to be Array.
// You may load data from DB.
const slides = [{
  url: 'https://example.com',
  title: 'sample slider 0',
  image: '/logo.svg',
  alt: 'sample slider image'
},{
  url: 'https://example.com',
  title: 'sample slider 1',
  image: '/logo.svg',
  alt: 'sample slider image'
},{
  url: 'https://example.com',
  title: 'sample slider 2',
  image: '/logo.svg',
  alt: 'sample slider image'
},{
  url: 'https://example.com',
  title: 'sample slider 3',
  image: '/logo.svg',
  alt: 'sample slider image'
}]

function App() {
  return (
    <div className="App">
      <Slider data={slides} />
    </div>
  );
}

export default App;
