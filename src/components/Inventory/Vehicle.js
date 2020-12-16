

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import {
    Largebox,
    PicturesBox,
    VehicleInfoBox,
    VehicleModel
} from "./styles"


function Vehicle({ match })  {
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
                
                {neon.map(vehicle => {
        if (Number(params.id)===vehicle.id) {
            return (
            <div key={vehicle.id}>
                    <h1 className="display-4 my3">Vehicle Information</h1>
                    <h2>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
            <Largebox key={vehicle.id}>
            <PicturesBox>pictures</PicturesBox>
              <VehicleInfoBox >
              <VehicleModel>Exterior Color: {vehicle.color_exterior} </VehicleModel>
              <VehicleModel>Interior Color: {vehicle.color_interior} </VehicleModel>
              <VehicleModel>Interior Fabric: {vehicle.fabric}</VehicleModel>
                <VehicleModel>Vin:{vehicle.vin}</VehicleModel>
                <VehicleModel>Current Mileage: {vehicle.mileage} </VehicleModel>
                <VehicleModel>Price: ${vehicle.price} </VehicleModel>
                <VehicleModel>Engine Type: {vehicle.engine_size} {vehicle.cylinders} </VehicleModel>
                <VehicleModel>Transmission: {vehicle.transmission} </VehicleModel>
                <VehicleModel>Drivetrain: {vehicle.drivetrain} </VehicleModel>
                <VehicleModel>Warranty: {vehicle.warranty} </VehicleModel>
                <VehicleModel>Description {vehicle.description} </VehicleModel>
            </VehicleInfoBox>
                    </Largebox>  
                    </div>
        )
    }else {return null}
                })} 
            </div>
        </div>
    );
}
export default Vehicle;