import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State building",
    description: "One of the most famous sky scrapers in the world!",
    image:
      "https://images.unsplash.com/photo-1508094214466-708a7d21c5c0?q=80&w=1161&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484445,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State buildingssssssss",
    description: "One of the most famous sky scrapers in the world!",
    image:
      "https://images.unsplash.com/photo-1508094214466-708a7d21c5c0?q=80&w=1161&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484445,
      lng: -73.9882393,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find Place!</h2>
      </div>
    );
  }
  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        lable="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="decription"
        element="textarea"
        lable="Description"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Button type="submit" disabled={true} />
    </form>
  );
};

export default UpdatePlace;
