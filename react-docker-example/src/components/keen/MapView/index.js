import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {

  Grid,
  
} from '@material-ui/core';

function GetIcon (_iconSize) {
  return L.icon({
    iconUrl: require('./location-pin.png'),
    iconSize: [64,64],
    shadowUrl: null
  })
}
function MapView(props) {
  return (
    <Grid item md={12} >
    <MapContainer
        style={{ height: '80vh',  maxWidth:"82vw" ,position:'static' }}
        center={props.position}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={props.position} icon={GetIcon(20)}>
          <Popup>
            {props.titlePopup}
          </Popup>
        </Marker>
      </MapContainer>
    </Grid>
  );
}

export default MapView;
