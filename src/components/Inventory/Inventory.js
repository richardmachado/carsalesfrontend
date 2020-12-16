import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal'
import {Body, Largebox, PicturesBox, VehicleInfoBox, VehicleModel} from "./styles"
import { Link } from "react-router-dom";

// import Vehicle from "./Vehicle";

function Inventory() {
  const [neon, setNeo] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false)
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
    <Body>
    <div className="container">
      <h1 className="display-4 my3">Inventory</h1>        
              {neon.map(vehicle => {
                return (
                  <Largebox key={vehicle.id}>
                      <PicturesBox>
                      <Link to={`/vehicles/${vehicle.id}`}>
                        pictures 
                        </Link>   
                        </PicturesBox>
                     
                      <VehicleInfoBox >
                      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
                      <Modal ariaHideApp={false}
                        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={
   { overlay: {
     backgroundColor: 'grey'
          },
            content: {
       color:'orange'
     }
      }
    }
                      >       
                      
        <button onClick={()=>setModalIsOpen(false)}>Close</button>
     </Modal>
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
    </Body>
  );
}

export default Inventory;