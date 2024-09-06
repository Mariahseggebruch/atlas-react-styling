import React from 'react';
import coverArtImage from '../assets/placeholder.svg';

const CoverArt = () => {
  return (
    <div className="h-full w-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${coverArtImage})` }}>
      <img src={coverArtImage} alt="Cover Art" className="absolute top-0 left-0" />
    </div>
  );
};

export default CoverArt;
