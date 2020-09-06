import React from 'react';
// import pricingPicPath from '../../Images/';
import './Pricing.css';

const Pricing = (props) => {
  return (
    <div className="pricing">
      <h2 className="pricing__title">Услуги и цены</h2>
      <ul className="pricing__container">
        {props.data.map((item, num) => (
            <li key={num} className="pricing__service">
              <img className="prising__pic" alt={item.pictureAlt} src={item.src} />
              <p className="pricing__name">{item.name}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Pricing;