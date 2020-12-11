import React, { useState, useEffect } from "react";
import axios from "axios";

import {Largebox, PicturesBox, VehicleInfoBox, VehicleModel} from "./styles"

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
    return <div><h1>Loading Vehicles...</h1></div>
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
                      
                        <VehicleModel>Year: {vehicle.year} {vehicle.make} {vehicle.model}</VehicleModel>
                      <VehicleModel>Exterior Color: {vehicle.color_exterior} </VehicleModel>
                      <VehicleModel>Interior Color: {vehicle.color_interior} </VehicleModel>
                      <VehicleModel>Interior Fabric: {vehicle.fabric}</VehicleModel>
                        <VehicleModel>Vin:{vehicle.vin}</VehicleModel>
                        <VehicleModel>Current Mileage: {vehicle.mileage} </VehicleModel>
                        <VehicleModel>Price: ${vehicle.price} </VehicleModel>
                        <VehicleModel>Engine Type: {vehicle.engine} </VehicleModel>
                        <VehicleModel>Drivetrain: {vehicle.drivetrain} </VehicleModel>
                        <VehicleModel>Warranty: {vehicle.warranty} </VehicleModel>
                        <VehicleModel>Description {vehicle.description} </VehicleModel>
                    </VehicleInfoBox>
                  </Largebox>  
              )
              })}
      </div>
    </div>
  );
}

export default Inventory;