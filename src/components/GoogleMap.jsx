import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from './LocationPin.jsx';


const GoogleMap = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Find Us</h2>

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