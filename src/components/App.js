import React, { useState } from 'react';
import Header from './ui/Header';
import LandingPage from './LandingPage';
import TheDifference from './TheDifference';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';
import ContactUs from './contact-us/ContactUs'
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';
import GoogleMap from './GoogleMap.jsx';

const header = [
  {
    title: 'Header Title Here!',
  },
];

const whatWeDo = {
  sectionHeader: {
    barColor: 'teal',
    titleColor: 'teal',
    title: 'WHAT WE DO'
  },
  cards: [
    {
      title: 'Consult',
      copy: 'Evaluating property specific information and analyzing market trends are vital first steps to our process. We develop customized, data-driven sales strategies to best satisfy the needs of our clients.',
      // imageUrl: "/src/assets/checklist.svg",
      imageUrl: '{checklist}',
      imageTitle: 'Email',
    },
    {
      title: 'Navigate',
      copy: 'Real estate sales can be complex and arduous, particularly in the multifamily space. Our team of professional and licensed agents are dedicated to guiding our clients through every step of the transaction.',
      imageUrl: 'whatwedo1',
      imageTitle: 'Checklist',
    },
    {
      title: 'Deliver',
      copy: 'Completing the sale is of utmost importance. Communication with all involved parties is the key to our success in meeting pivotal milestones and crossing the finish line.',
      imageUrl: 'email',
      imageTitle: 'House',
    },
  ],
};

const whoWeAre = {
  sectionHeader: {
    barColor: '#FFDC00',
    titleColor: '#FFDC00',
  },
  cards: [
    {
      title: 'Experience',
      copy: 'We have been involved in the sale of hundreds of multifamily units over the last several years. Our knowledge of both the sales process and local markets give us a competitive edge in any transaction.',
      imageUrl: '',
      imageTitle: '',
    },
    {
      title: 'Presentation',
      copy: 'Professional photography and videography, drone footage, virtual tours, and dedicated showing services are just some of the ways we utilize the latest technologies to best market and show properties.',
      imageUrl: '',
      imageTitle: '',
    },
    {
      title: 'Negotiation',
      copy: 'As multifamily owners and investors ourselves, we understand how crucial effective negotiation is in real estate sales. We pride ourselves on being tenacious negotiators and relentlessly pursue the best possible terms and price for our clients.',
      imageUrl: '',
      imageTitle: '',
    },
    {
      title: 'Network',
      copy: 'A successful sale is dependent upon many individuals across a variety of professions. Our years of experience and intentional approach to networking helps us leverage relationships and solve problems proactively.',
      imageUrl: '',
      imageTitle: '',
    },
  ]
};

const theDifference = {
  sectionHeader: {
    barColor: 'olive',
    titleColor: 'olive',
    title: 'THE DIFFERENCE'
  },
  cards: [
    {
      title: 'Experience',
      copy: 'We have been involved in the sale of hundreds of multifamily units over the last several years. Our knowledge of both the sales process and local markets give us a competitive edge in any transaction.',
      // imageUrl: "/src/assets/checklist.svg",
      imageUrl: './thedifference/experience.jpg',
      imageTitle: 'Email',
    },
    {
      title: 'Presentation',
      copy: 'Professional photography and videography, drone footage, virtual tours, and dedicated showing services are just some of the ways we utilize the latest technologies to best market and show properties.',
      imageUrl: './thedifference/presentation.png',
      imageTitle: 'Checklist',
    },
    {
      title: 'Negotiation',
      copy: 'As multifamily owners and investors ourselves, we understand how crucial effective negotiation is in real estate sales. We pride ourselves on being tenacious negotiators and relentlessly pursue the best possible terms and price for our clients.',
      imageUrl: './thedifference/negotiation.png',
      imageTitle: 'House',
    },
    {
      title: 'Network',
      copy: 'A successful sale is dependent upon many individuals across a variety of professions. Our years of experience and intentional approach to networking helps us leverage relationships and solve problems proactively.',
      imageUrl: './thedifference/network.png',
      imageTitle: 'House',
    },
  ],
};

const location = {
  address: 'Cleveland Apartment Brokers',
  lat: 41.4523811,
  lng: -81.78998120059272,
}

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
          {/* <Route path='#pastsales' exact component={PastSales} /> */}
          <Route path='#whoweare' exact component={WhoWeAre} />
          {/* <Route path='#pastsales' exact component={PastSales} /> */}
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

