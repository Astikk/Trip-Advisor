import React, { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Model from "../../shared/UI elements/Modal";
import Card from "../../shared/UI elements/Card";
import Map from "../../shared/UI elements/Map";
import "./PlaceItems.css";

const PLaceItems = (props) => {
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  debugger;
  return (
    <React.Fragment>
      <Model
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map cordinates={props.cordinates} />
        </div>
      </Model>
      <li className="place-item">
        <Card className="palce-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PLaceItems;
