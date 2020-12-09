import React, { useState, useEffect } from "react";

import axios from "axios";
import { VehicleInfoBox, Largebox, PicturesBox, Button, Container } from "./styles";
import  {Link}  from 'react-router-dom';

// import AddNewVehicleModal from './AddNewVehicleModal';


export default function Maintenance(props, id) {
  console.log(props)
  const removeId = (id) => {
    axios
        .delete(`https://carsalesbackend.herokuapp.com/api/inventory/${id}`)
      .then(res => {
        window.location.reload(false);
        
      })
      .catch(err => {
        alert((err.message = "Vehicle failed to delete"));
        console.log(err.response);
      });
  };

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
        <h1 className="display-4 my3">Maintenance</h1>  
        <Link to="/addvehicle"><Button>Add New Vehicle</Button></Link>
        <Container>
              {neon.map(vehicle => {
                return (
                 
                  <Largebox key={vehicle.id}>
                    <PicturesBox>pictures will go here</PicturesBox>
                    <VehicleInfoBox>
                        <h3>ID:{vehicle.id}</h3>
                        <h4>Model: {vehicle.year} </h4>
                        <h4>Make: {vehicle.make} </h4>
                        <h4>Vehicle Model: {vehicle.model} </h4>
                        <h4>Current Mileage: {vehicle.mileage} </h4>
                        <h4>Price: ${vehicle.price} </h4>
                        <h4>Engine Type: {vehicle.engine} </h4>
                        <h4>Drivetrain: {vehicle.drivetrain} </h4>
                        <h4>Warranty: {vehicle.warranty} </h4>
                        {/* <h3>Description {vehicle.description} </h3> */}
                      <button>Edit</button>
                      <Button onClick={() => removeId(vehicle.id)}>Delete</Button>
                    </VehicleInfoBox>
                    </Largebox>
                   
              )
              })}
     </Container>  
      </div>
    </div>
  );
}

