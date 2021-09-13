import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import TheDifference from './components/TheDifference';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import ContactUs from './components/ContactUs';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './config/Theme';


const whatWeDo = {
  sectionHeader: {
    barColor: '#2A8091',
    titleColor: '#2A8091',
    title: 'WHAT WE DO',
  },
  cards: [
    {
      title: 'Consult',
      copy: 'Evaluating property specific information and analyzing market trends are vital first steps to our process. We develop customized, data-driven sales strategies to best satisfy the needs of our clients.',
      imageUrl: './assets/whatWeDo/consult.jpg',
      imageTitle: 'Consult',
    },
    {
      title: 'Navigate',
      copy: 'Real estate sales can be complex and arduous, particularly in the multifamily space. Our team of professional and licensed agents are dedicated to guiding our clients through every step of the transaction.',
      imageUrl: './assets/whatWeDo/navigate.jpg',
      imageTitle: 'Navigate',
    },
    {
      title: 'Deliver',
      copy: 'Completing the sale is of utmost importance. Communication with all involved parties is the key to our success in meeting pivotal milestones and crossing the finish line.',
      imageUrl: './assets/whatWeDo/deliver.jpg',
      imageTitle: 'Deliver',
    },
  ],
};

const whoWeAre = {
  sectionHeader: {
    barColor: '#4E4637',
    titleColor: '#4E4637',
  },
  bio: 
  {
    copy1: 'Ohio Apartment Brokers is a division of Lokal Real Estate.',
    copy2: "Headquartered in Cleveland, Ohio. We are licensed real estate agents and have been involved in the sale of hundreds of multifamily units over the last several years.",
    copy3: "While many real estate companies are focused on single family homes,",
    copy4: "Ohio Apartment Brokers is uniquely positioned in the multifamily and apartment building space.",
    copy5: "Our knowledge and experience with these transactions means that our clients have experts working on their behalf to get their properties sold for a great price.",
  },
};

const theDifference = {
  sectionHeader: {
    barColor: '#2A8091',
    titleColor: '#2A8091',
    title: 'THE DIFFERENCE',
  },
  cards: [
    {
      title: 'Experience',
      copy: 'We have been involved in the sale of hundreds of multifamily units over the last several years. Our knowledge of both the sales process and local markets give us a competitive edge in any transaction.',
      imageUrl: './assets/thedifference/experience.jpg',
      imageTitle: 'Email',
    },
    {
      title: 'Presentation',
      copy: 'Professional photography and videography, drone footage, virtual tours, and dedicated showing services are just some of the ways we utilize the latest technologies to best market and show properties.',
      imageUrl: './assets/thedifference/presentation.jpg',
      imageTitle: 'Checklist',
    },
    {
      title: 'Negotiation',
      copy: 'As multifamily owners and investors ourselves, we understand how crucial effective negotiation is in real estate sales. We pride ourselves on being tenacious negotiators and relentlessly pursue the best possible terms and price for our clients.',
      imageUrl: './assets/thedifference/negotiation.jpg',
      imageTitle: 'House',
    },
    {
      title: 'Network',
      copy: 'A successful sale is dependent upon many individuals across a variety of professions. Our years of experience and intentional approach to networking helps us leverage relationships and solve problems proactively.',
      imageUrl: './assets/thedifference/network.jpg',
      imageTitle: 'House',
    },
  ],
};

const location = {
  address: 'Cleveland Apartment Brokers',
  lat: 41.4523811,
  lng: -81.78998120059272,
};

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route path='#whoweare' exact component={WhoWeAre} />
          <Route path='#whatwedo' exact component={WhatWeDo} />
        </Switch>
        <LandingPage />
      </BrowserRouter>
      <WhatWeDo whatWeDoObject={whatWeDo} />
      <WhoWeAre whoWeAreObject={whoWeAre} />
      <TheDifference theDifferenceObject={theDifference} />
      <ContactUs />
    </ThemeProvider>
  );
}

export default App;
