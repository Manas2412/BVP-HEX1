import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';

const DelayedLink = ({ to, buttonText, icon: Icon, imgSrc, imgAlt }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      navigate(to); // Navigate to the page after 3 seconds
    }, 3000); // 3-second delay
  };

  return (
    <div className="grid-item">
      {isLoading ? (
        <Circles
        height="25"
        width="25"
        color="black"
        ariaLabel="loading-indicator"
      />
      ) : (
        <div onClick={handleClick}>
          <h5>
            <Icon /> {buttonText}
          </h5>
          <img
            src={imgSrc}
            alt={imgAlt}
            className="step-image"
          />
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      )}
    </div>
  );
};

export default DelayedLink;
