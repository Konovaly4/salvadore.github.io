import React from 'react';
import sharesImgPaht from '../../Images/action-eyes.jpg';
import './Shares.css';

function Shares () {

  return (
    <div className="shares">
      <div className="shares__picture">
        <img className="shares__img" src={sharesImgPaht} alt="shares" />
        <p className="shaers__img-annotation">classic</p>
      </div>
      <p className="shares__description">НАРАЩИВАНИЕ РЕСНИЦ 1500р</p>
      <div className="shares__logo">
        <p className="shares__logo-annotation">АКЦИЯ</p>
      </div>
    </div>
  )
}

export default Shares;