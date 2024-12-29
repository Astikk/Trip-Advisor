import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

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

function UserPlaces() {
  const userId = useParams().userId;
  const loadedplaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  console.log(loadedplaces);
  return (
    <>
      <PlaceList items={loadedplaces} />
    </>
  );
}

export default UserPlaces;
