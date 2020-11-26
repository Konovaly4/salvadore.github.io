import React from 'react';
import './Header.css';
import logoPath from '../../Images/logo.png';
import logoIgPath from '../../Images/logo_ig.svg';
import phoneLogoPath from '../../Images/phone.png';

function Header(props) {

  return (
    <header className="header" name="top">
      <img className="header__logo" src={logoPath} alt="logo" />
      <button className="header__nav-button" onClick={props.onButtonAppear} />
      <p className="header__text header__text_worktime">10:00 - 21:00</p>
      <div className="header__main-info">
        <img className="header__phone-logo" src={phoneLogoPath} alt="phone-logo" />
        <p className="header__text header__text_address">ул. Воронцовская, д.19А, стр.1</p>
        <p className="header__phone">8(903)100-48-20</p>
      </div>
      <a className="header__link" href="https://instagram.com/salon_salvadore?igshid=hbayq0uu6foi" target="blank">
        <img src={logoIgPath} alt="logo-instagram" />
      </a>
    </header>
  )
}

export default Header;
