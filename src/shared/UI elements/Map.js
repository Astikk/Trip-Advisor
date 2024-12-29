import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "./Map.css";

function Map(props) {
  const customicon = new Icon({
    iconUrl: require("../../images/marker-icon.png"),
    iconSize: [38, 38],
  });

  return (
    <div className={`map ${props.className}`} style={props.style}>
      <MapContainer center={[props.cordinates["lat"], props.cordinates["lng"]]} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.cordinates.lat, props.cordinates.lng]} icon={customicon}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
