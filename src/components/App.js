import React from 'react';
import RecordButton from './RecordButton/RecordButton';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Shares from './Shares/Shares';
import Pricing from './Pricing/Pricing'
import pricingData from '../data/pricingData';
import Team from './Team/Team';
import teamData from '../data/teamData';
import photoData from '../data/photoData';
import Feedback from './Feedback/Feedback';
import feedbackData from '../data/feedbackData';
import Contacts from './Contacts/Contacts';
import './App.css';

function App() {
  const [appearance, setAppearance] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(document.documentElement.clientWidth);

  const buttonAppear = (e) => {
    e.preventDefault();
    setAppearance(true);
  }

  const buttonDisappear = (e) => {
     if (!e.target.className.includes('navbar')) setAppearance(false);
  }

  window.addEventListener('resize', () => setWindowWidth(document.documentElement.clientWidth));

  return (
  <main className="app" onClick={appearance ? buttonDisappear : undefined}>
    <RecordButton />
    <Header onButtonAppear={buttonAppear} />
    <Navbar visibility={appearance} theme="light" />
    <Main />
    <Shares />
    <Pricing data={pricingData} windowWidth={windowWidth} />
    <Team data={teamData} photo={photoData} />
    <Feedback data={feedbackData} />
    <Contacts />
    <Navbar theme="dark" />
  </main>
  );
}

export default App;
