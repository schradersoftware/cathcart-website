import React, { useState } from 'react';
import Header from './ui/Header';
import LandingPage from './LandingPage';
// import ContactUs from './ContactUs';
import PastSales from './PastSales';
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
  },
  cards: [
    {
      title: 'Selling',
      copy: 'We work with our clients to develop a customized plan to help sell their properties on the open market for the best price.',
      // imageUrl: "/src/assets/checklist.svg",
      imageUrl: '{checklist}',
      imageTitle: 'Email',
    },
    {
      title: 'Evaluation',
      copy: 'This is the evaluation copy area. This is the evaluation copy area. This is the evaluation copy area. This is the evaluation copy area.',
      imageUrl: 'whatwedo1',
      imageTitle: 'Checklist',
    },
    {
      title: 'Negotiation',
      copy: 'There are no upfront costs to our services. Our competitive commission structure ensures that our team will work tirelessly.',
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
          <Route path='#pastsales' exact component={PastSales} />
          <Route path='#whoweare' exact component={WhoWeAre} />
          <Route path='#pastsales' exact component={PastSales} />
          <Route path='#whatwedo' exact component={WhatWeDo} />
        </Switch>
        <LandingPage />
      </BrowserRouter>
      <WhoWeAre whoWeAreObject={whoWeAre} />
      <WhatWeDo whatWeDoObject={whatWeDo} />
      <PastSales />
      <TheDifference />
      <ContactUs />
      {/* <GoogleMap location={location} zoomLevel={18} /> */}
    </ThemeProvider>
  );
}

export default App;

// This is nested inside a component to reuse

// <SectionHeader title={title} />

//////////////

// This goes in App.js

// const header = [
//   {
//     title: 'Header Title Here!',
//   },
// ];

// <Header
//   value={value}
//   setValue={setValue}
//   selectedIndex={selectedIndex}
//   setSelectedIndex={setSelectedIndex}
//   title={header[0].title}
// />
