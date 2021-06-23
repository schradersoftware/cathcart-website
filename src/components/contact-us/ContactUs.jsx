import React from 'react'
import Grid from '@material-ui/core/Grid'

import Form from './Form'
import Info from './Info'
import GoogleMap from "../GoogleMap.jsx";

import './contact-us.css'

const location = {
  address: 'Cleveland Apartment Brokers',
  lat: 41.4523811,
  lng: -81.78998120059272,
}

const ContactUs = () => (
  <React.Fragment>
    <Grid
      xs={12}
      container
      className="contact-us"
      id="contact"
      direction="column"
      justify="center"
      // alignItems="flex-end"
    >
      <Grid item xs={12}>
        <GoogleMap location={location} zoomLevel={18} />
      </Grid>
      <Grid item xs={12}>
        <Form />
      </Grid>
      <Grid item xs={12}>
        <Info />
      </Grid>
    </Grid>
  </React.Fragment>
);

export default ContactUs

