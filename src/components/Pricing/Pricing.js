import React from 'react';
import SearchArrow from '../SearchArrow/SearchArrow';
// import pricingPicPath from '../../Images/';
import './Pricing.css';

const Pricing = (props) => {
  const minContainerWidth = 665;
  const minItemWidth = 133;
  const [transformation, setTransformation] = React.useState(0);
  let containerStyle = {
    transform: `translateX(${transformation}px)`,
  };

  const rightSlider = () => {
    if ((Math.abs(transformation) + props.windowWidth) >= minContainerWidth) return;
    if ((minContainerWidth - Math.abs(transformation) - props.windowWidth) < minItemWidth) {
      setTransformation(transformation - (minContainerWidth - Math.abs(transformation) - props.windowWidth));
      } else {
      setTransformation(transformation - minItemWidth);
    }
  }

  const leftSlider = () => {
    if (transformation === 0) return;
    if (Math.abs(transformation) <= minItemWidth) {
      setTransformation(transformation + Math.abs(transformation));
      } else {
        setTransformation(transformation + minItemWidth);
      }
  }

  return (
    <section className="pricing">
      <a name="pricing" />
      <header className="pricing__header">
        <SearchArrow elemName="team__arrow" 
          direction="left" 
          active={props.windowWidth > 665 || transformation === 0 ? false : true} 
          onClick={leftSlider} />
        <h2 className="pricing__title">Услуги и цены</h2>
        <SearchArrow elemName="team__arrow" 
          direction="right" 
          active={props.windowWidth > 665 || (Math.abs(transformation) + props.windowWidth >= minContainerWidth) ? false : true} 
          onClick={rightSlider} />
      </header>
      <ul className="pricing__container" style={containerStyle}>
        {props.data.map((item, num) => (
            <li key={num} className="pricing__service">
              <img className="prising__pic" alt={item.pictureAlt} src={item.src} />
              <p className="pricing__name">{item.name}</p>
            </li>
        ))}
      </ul>
    </section>
  )
}

export default Pricing;
