import React from 'react'
import GoogleMapReact from 'google-map-react'
import './styles.css'
import LocationPin from './LocationPin';

const GoogleMap = ({ location, zoomLevel }) => (
  <div className="map">

    <h2 className="headingText map-h2">Contact Us</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: ""
        }}
        defaultCenter={location}
        defaultZoom={10}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default GoogleMap;