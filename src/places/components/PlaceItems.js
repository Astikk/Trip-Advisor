import React from "react";
import "./PlaceItems.css";
import Card from "../../shared/UI elements/Card";
const PLaceItems = props => {
    return <li className="place-item">
        <Card className="palce-item__content">
        <div className="place-item__image">
        <img src={props.image} alt={props.title}/>
        </div> 
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
            <button>VIEW ON MAP</button>
            <button>EDIT</button>
            <button>DELETE</button>
        </div>
        </Card>
    </li>;
};

export default PLaceItems;
