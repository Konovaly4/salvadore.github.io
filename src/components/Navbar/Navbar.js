import React from 'react';
import cn from 'classnames';
// import {navbarData} from '../../data/navbarData';
import logoPath from '../../Images/logo_small.png';
import './Navbar.css';

function Navbar(props) {

  return (
    <nav className={cn('navbar', {
      ' navbar__dark': props.theme === 'dark',
      ' navbar__visible': !!props.visibility
    })}>
      <a className='navbar__link' href='#top'>
        <img className={props.theme !== 'dark' ? 'navbar__logo' : 'navbar__logo navbar__logo_dark'} src={logoPath} alt="logo" />
      </a>
      {/* <RecordButton buttonPlace="navbar__button" /> */}
      <ul className={props.theme !== 'dark' ? 'navbar__list' : 'navbar__list navbar__list_dark'}>
        <li key='1' className="navbar__item"><a className='navbar__item-link' href='#pricing'>Услуги и цены</a></li>
        <li key='2' className={cn('navbar__item navbar__dot', {'navbar__dot_dark': props.theme === 'dark'})}></li>
        <li key='3' className="navbar__item"><a className='navbar__item-link' href='#team'>Наши специалисты</a></li>
        <li key='4' className={cn('navbar__item navbar__dot', {'navbar__dot_dark': props.theme === 'dark'})}></li>
        <li key='5' className="navbar__item"><a className='navbar__item-link' href='#shares'>Акции</a></li>
        <li key='6' className={cn('navbar__item navbar__dot', {'navbar__dot_dark': props.theme !== 'dark'})}></li>
        <li key='7' className="navbar__item"><a className='navbar__item-link' href='#work-photo'>Фото работ</a></li>
        <li key='8' className={cn('navbar__item navbar__dot', {'navbar__dot_dark': props.theme === 'dark'})}></li>
        <li key='9' className="navbar__item"><a className='navbar__item-link' href='#feedback'>Отзывы</a></li>
        <li key='10' className={cn('navbar__item navbar__dot', {'navbar__dot_dark': props.theme === 'dark'})}></li>
        <li key='11' className="navbar__item"><a className='navbar__item-link' href='#contacts'>Контакты</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
