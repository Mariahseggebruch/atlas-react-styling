import React from 'react';
import coverArtImage from '../assets/placeholder.svg';

const CoverArt = () => {
  return (
    <div className="h-40 w-40 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${coverArtImage})` }}>
    </div>
  );
};

export default CoverArt;
