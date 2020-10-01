import React from 'react';
import SearchArrow from '../SearchArrow/SearchArrow';
// import pricingPicPath from '../../Images/';
import './Pricing.css';

const Pricing = (props) => {
  let translateCounter = 0;
  let minContainerWidth = 665;
  let windowWidth = document.documentElement.clientWidth;

  const rightSlider = (elem) => {
    if (windowWidth >= (minContainerWidth/2)) {
      elem.style.transform = `translateX(-${minContainerWidth - windowWidth}px)`;
    } else  { if ((minContainerWidth - (translateCounter + windowWidth)) < windowWidth) {
        elem.style.transform = `translateX(-${minContainerWidth - (translateCounter + windowWidth)}px)`;
        translateCounter = translateCounter + (minContainerWidth - (translateCounter + windowWidth)) + windowWidth;
      } else {
        elem.style.transform = `translateX(-${windowWidth}px)`;
        translateCounter = translateCounter + windowWidth
      }
    }
  }

  const leftSlider = (elem) => {
    if (windowWidth >= (minContainerWidth/2)) {
      elem.style.transform = `translateX(${minContainerWidth - windowWidth}px)`;
    } else  { if ((minContainerWidth - (translateCounter + windowWidth)) < windowWidth) {
        elem.style.transform = `translateX(${minContainerWidth - (translateCounter + windowWidth)}px)`;
        translateCounter = translateCounter - (minContainerWidth - (translateCounter + windowWidth)) + windowWidth;
      } else {
        elem.style.transform = `translateX(${windowWidth}px)`;
        translateCounter = translateCounter - windowWidth
      }
    }
  }


  return (
    <section className="pricing">
      <header className="pricing__header">
        <SearchArrow elemName="team__arrow" direction="left" active="true" onClick={leftSlider} />
        <h2 className="pricing__title">Услуги и цены</h2>
        <SearchArrow elemName="team__arrow" direction="right" active="true" onClick={rightSlider} />
      </header>
      <ul className="pricing__container">
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
