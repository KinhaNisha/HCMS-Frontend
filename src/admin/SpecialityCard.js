import React from 'react';
import RoundTick from '../images/round-tick.png'; 

const SpecialityCard = ({ imageSrc, altText, title, onImageClick, isImageClicked }) => {
  return (
    <div className="speciality-card">
      {isImageClicked && (
        <div className="tick">
          <img src={RoundTick} alt="success consult" className="tick-image" />
        </div>
      )}
      <div className="image-container" onClick={onImageClick}>
        <img src={imageSrc} alt={altText} className="speciality-image" />
      </div>
      <div className="speciality-title">{title}</div>
    </div>
  );
};

export default SpecialityCard;
