import React, { useState } from 'react';
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import '../assets/carousel.css';

import AspectRatio from '@mui/joy/AspectRatio';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ position: 'relative', width: '50%', overflow: 'hidden' }}>
      <button onClick={goToPrevious} className='left-button'>
        <GoChevronLeft size='40px' />
      </button>
      <AspectRatio flex ratio="1" sx={{ minWidth: 500, width: '100%', height: '500px' }}>
            <img
                src={images[currentIndex]}
                loading="lazy"
                alt={images[currentIndex]}
                style={{ width: '100%', height: '500px'}}
            />
        </AspectRatio>
      <button onClick={goToNext} className='right-button'>
        <GoChevronRight size='40px' />
      </button>
    </div>
  );
};
export default Carousel