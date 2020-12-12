import React, { useState, useEffect } from "react";
import Modal from "react-modal"
import axios from "axios";
import { Image } from 'cloudinary-react';
import {
  Body,
  // VehicleInfoBox,
  Largebox,
  PicturesBox,
  DeleteButton,
  EditButton,
  Button,
  Container
} from "./styles";
import { Link } from 'react-router-dom';
import { confirmationFlow } from "./ConfirmationFlow";
import { useMachine } from "react-robot";


// import AddNewVehicleModal from './AddNewVehicleModal';


export default function Maintenance(props, id) {
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
  const [current, send] = useMachine(confirmationFlow);
  const [imageIds, setImageIds] = useState();
  const loadImages = async () => {
    try {
      const res = await fetch('https://carsalesbackend.herokuapp.com/api/images');
      const data = await res.json();
      // console.log(data)
      setImageIds(data)
    } catch (error) {
      console.log(error)
    }
  }

// console.log(neon)

  useEffect(() => {
    loadImages();
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
    <Body>
    <div>
        <h1 className="display-4 my3">Maintenance</h1>  
        <Link to="/addvehicle"><Button>Add New Vehicle</Button></Link>
        <Container>
              {neon.map(vehicle => {
                return (
                 
                  <Largebox key={vehicle.id}>
                    <PicturesBox>
                       {imageIds && imageIds.map((imageId, index) => (
                         <Image
                           key={index}
                           cloudName="dd1erw65b"
                           publicId={imageId}
                           width="100"
                           crop="scale"
                         />
                        ))}
                    </PicturesBox>
                    
                    <Largebox>
                      <h3>ID:{vehicle.id}</h3>  
                      <h6>Vin:{vehicle.vin}</h6>
                      <h4>Model: {vehicle.year} </h4>
                      <h4>Make: {vehicle.make} </h4>
                      <h4>Vehicle Model: {vehicle.model} </h4>
                      <h4>Current Mileage: {vehicle.mileage} </h4>
                      <h4>Price: ${vehicle.price} </h4>
                      <h4>Exterior Color: {vehicle.color_exterior} </h4>
                      <h4>Interior Color: {vehicle.color_interior} </h4>
                      <h4>Interior Fabric: {vehicle.fabric}</h4>
                      <h4>Engine Type: {vehicle.engine} </h4>
                      <h4>Drivetrain: {vehicle.drivetrain} </h4>
                      <h4>Warranty: {vehicle.warranty} </h4>
                      {/* <h3>Description {vehicle.description} </h3> */}
                      <EditButton>Edit</EditButton>
               
           {/*-------------------------------------Delete Button Modal---------------------------- */}
                        <DeleteButton onClick={() => send('begin')}>
                            Delete
                          </DeleteButton>

                          <Modal
                            onRequestClose={() => send('cancel')}
                            isOpen={current.name === 'confirming'}
                          >
                            Are you sure?! Action cannot be undone
                            <button onClick={() => send('cancel')}>
                              Cancel
                            </button>
                            <button className="btn btn-danger" onClick={() => send(removeId(vehicle.id))}>
                              Yes Definitely
                            </button>
                      </Modal>
            {/*-------------------------------------End of Delete Button Modal---------------------------- */}
                      
                    </Largebox>
                    </Largebox>
                   
              )
              })}
     </Container>  
      </div>
    </Body>
  );
}

