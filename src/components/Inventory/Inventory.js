import React, { useState, useEffect } from "react";
import axios from "axios";

import {Largebox, PicturesBox, VehicleInfoBox} from "./styles"

function Inventory() {
    const [neon, setNeo] = useState();
// console.log(neon)

  useEffect(() => {
    axios
      .get("https://carsalesbackend.herokuapp.com/api/inventory")
      .then(response => {
          setNeo(response.data);
          // console.log(response.data)

      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (!neon) {
    return <div><h1>Loading...</h1></div>
  }

  return (
    <div className="body">
    <div className="container">
      <h1 className="display-4 my3">Inventory</h1>        
              {neon.map(vehicle => {
                return (
                  <Largebox>
                    <PicturesBox>pictures will go here</PicturesBox>
                  <VehicleInfoBox key={vehicle.id}>
                        <h3>Model: {vehicle.year} </h3>
                        <h4>Make: {vehicle.make} </h4>
                        <h4>Vehicle Model: {vehicle.model} </h4>
                        <h4>Current Mileage: {vehicle.mileage} </h4>
                        <h4>Price: ${vehicle.price} </h4>
                        <h4>Engine Type: {vehicle.engine} </h4>
                        <h4>Drivetrain: {vehicle.drivetrain} </h4>
                        <h4>Warranty: {vehicle.warranty} </h4>
                        <h4>Description {vehicle.description} </h4>
                    </VehicleInfoBox>
                  </Largebox>  
              )
              })}
      </div>
    </div>
  );
}

export default Inventory;