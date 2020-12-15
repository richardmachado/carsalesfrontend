import React, { useState, useEffect } from "react";
import Modal from "react-modal"
import axios from "axios";
import { Image } from 'cloudinary-react';
import {
  Body,
  // VehicleInfoBox,
  Largebox,
  PicturesBox,
  Smallerboxes,
  DeleteButton,
  EditButton,
  Button,
  Container,
  // Legend
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
          {/* <Legend>

            <p>Pictures</p>
            <p>Id</p>
            <p>Vin</p>
            <p>Year</p>
            <p>Model</p>
            <p>Mileage</p>
            <p>Price</p>
            <p>Exterior</p>
            <p>Interior</p>
            <p>Engine</p>
            <p>Drivetrain</p>
            <p>Warranty</p>
            
            </Legend> */}
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
                      <Smallerboxes>
                        <p>ID</p>
                        <h4>{vehicle.id}</h4>  
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>VIN</p>
                        <h6>{vehicle.vin}</h6>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Year</p>
                        <h4>{vehicle.year} </h4>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Make</p>
                        <h4>{vehicle.make} </h4>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Model</p>
                        <h4>{vehicle.model} </h4>
                      </Smallerboxes>  
                      <Smallerboxes>
                        <p>mileage</p>
                        <h4>{vehicle.mileage} </h4>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Price</p>
                        <h4>${vehicle.price} </h4>
                      </Smallerboxes>                      <Smallerboxes>
                        <p>Exterior</p>
                        <h4>{vehicle.color_exterior} </h4>
                      </Smallerboxes>                      <Smallerboxes>
                        <p>Interior</p>
                        <h4>{vehicle.color_interior} </h4>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Fabric</p>
                        <h4>{vehicle.fabric} </h4>
                      </Smallerboxes><Smallerboxes>
                        <p>Engine</p>
                        <h4>{vehicle.engine} </h4>
                      </Smallerboxes><Smallerboxes>
                        <p>Drivetrain</p>
                        <h4>{vehicle.drivetrain} </h4>
                      </Smallerboxes><Smallerboxes>
                        <p>Warranty</p>
                        <h4>{vehicle.warranty} </h4>
                      </Smallerboxes>
                      
                      <Smallerboxes>
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
            </Smallerboxes>
                    </Largebox>
                    </Largebox>
                   
              )
              })}
     </Container>  
      </div>
    </Body>
  );
}

