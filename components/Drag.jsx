// DraggableImageCarousel.js
import './Drag.css';
import React, { useState, useEffect } from 'react';
import image1 from '../img/1.png';
import image2 from '../img/2.png';
import image3 from '../img/3.png';

function DraggableImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageArray = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    // Add more images as needed with the correct paths
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageArray]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  return (
    <div className="draggable-image-carousel">
      <div className="image-container">
        <img src={imageArray[currentIndex].src} alt={`Image ${currentIndex}`} />
      </div>
      <div className="arrow-buttons">
        <button className="arrow-button" onClick={handlePrev}>&#8249;</button>
        <button className="arrow-button" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
}

export default DraggableImageCarousel;
