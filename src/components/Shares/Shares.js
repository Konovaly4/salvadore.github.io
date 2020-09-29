import React from 'react';
import sharesData from '../../data/sharesData';
import './Shares.css';

function Shares () {

  return (
    <div className="shares">
      <div className="shares__picture">
        <img className="shares__img" src={sharesData.image} alt="shares" />
        <p className="shaers__img-annotation">{sharesData.annotation}</p>
      </div>
      <p className="shares__description">{sharesData.name}</p>
      <div className="shares__logo">
        <p className="shares__logo-annotation">АКЦИЯ</p>
      </div>
    </div>
  )
}

export default Shares;
