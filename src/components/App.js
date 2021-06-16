import React, { useState } from 'react';
import Header from './ui/Header';
import LandingPage from './LandingPage';
import ContactUs from './ContactUs';
import PastSales from './PastSales';
import Services from './Services';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';

const header = [
  {
    title: 'Header Title Here!',
  },
];

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
          <Route path='#whoweare' exact component={WhoWeAre} />
        </Switch>
      </BrowserRouter>
      <LandingPage />
      <WhatWeDo />
      <PastSales />
      <WhoWeAre />
      <Services />
      <ContactUs />
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
