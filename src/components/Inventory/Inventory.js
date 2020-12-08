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
                        <h2>Model: {vehicle.year} </h2>
                        <h2>Make: {vehicle.make} </h2>
                        <h3>Vehicle Model: {vehicle.model} </h3>
                        <h3>Current Mileage: {vehicle.mileage} </h3>
                        <h3>Price: ${vehicle.price} </h3>
                        <h3>Engine Type: {vehicle.engine} </h3>
                        <h3>Drivetrain: {vehicle.drivetrain} </h3>
                        <h3>Warranty: {vehicle.warranty} </h3>
                        <h3>Description {vehicle.description} </h3>
                    </VehicleInfoBox>
                  </Largebox>  
              )
              })}

      </div>
    </div>
  );
}

export default Inventory;