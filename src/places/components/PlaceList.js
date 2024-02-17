import React from "react";
import Card from "../../shared/UI elements/Card";
import { Link } from "react-router-dom";
import PLaceItems from "./PlaceItems";

import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="Place-list center">
        <Card>
          <h2>No Places found. Maybe create one?</h2>
          <button>Shar Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PLaceItems
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          cordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
