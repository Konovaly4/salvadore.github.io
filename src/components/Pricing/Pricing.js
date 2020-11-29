import React from 'react';
import SearchArrow from '../SearchArrow/SearchArrow';
import PricingPopup from '../PricingPopup/PricingPopup';
// import pricingPicPath from '../../Images/';
import './Pricing.css';

const Pricing = (props) => {
  const minContainerWidth = 665;
  const minItemWidth = 133;
  const [transformation, setTransformation] = React.useState(0);
  const [selectedItem, setItem] = React.useState(undefined);
  const [popupVisibility, setPopupVisibility] = React.useState(false);

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

  const visibilityToggle = () => {
    if (popupVisibility) {setItem(undefined)};
    setPopupVisibility(!popupVisibility);
  }

  const setActiveItem = (e) => {
    console.log('item - ' + props.data[e.target.closest('.pricing__service').id])
    console.log('item services - ' + props.data[e.target.closest('.pricing__service').id].services)
    console.log('item services 1 - ' + props.data[e.target.closest('.pricing__service').id].services[0].name)
    console.log('data - ' + props.data)
    console.log('e.target - ' + e.target.closest('.pricing__service').id)
    setItem(props.data[e.target.closest('.pricing__service').id]);
    console.log('sel.item - ' + selectedItem)
    // visibilityToggle();
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
            <li key={num} id={num} className="pricing__service" onClick={setActiveItem}>
              <img className="prising__pic" alt={item.pictureAlt} src={item.src} />
              <p className="pricing__name">{item.name}</p>
            </li>
        ))}
      </ul>
      <PricingPopup item={selectedItem}  visibility={popupVisibility} setVisibility={visibilityToggle} />
    </section>
  )
}

export default Pricing;
