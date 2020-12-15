

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import {Largebox, PicturesBox, VehicleInfoBox, VehicleModel} from "./styles"


function Inventory({ match }) {
    console.log(match)
    const [neon, setNeo] = useState();
    const params = useParams();
    console.log(params)

    
    // console.log(neon)

    useEffect(() => {
        axios
            .get("https://carsalesbackend.herokuapp.com/api/inventory")
            .then(response => {
                setNeo(response.data);
                console.log(response.data)
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
                <h1 className="display-4 my3">Vehicle Information</h1>
                {neon.map(vehicle => {
        if (params.id==vehicle.id) {
        return(
        
            <Largebox key={vehicle.id}>
            <PicturesBox>pictures will go here</PicturesBox>
              <VehicleInfoBox >
              
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
    }
                })}
            </div>
        </div>
    );
}
export default Inventory;