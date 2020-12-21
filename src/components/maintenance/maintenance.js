import React, { useState, useEffect } from "react";
// import Modal from "react-modal"
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
  StyledLink
} from "./styles";
import { Link } from 'react-router-dom';

 import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
 import Tooltip from 'react-bootstrap/Tooltip'


// import EditVehicle from './EditVehicle'

export default function Maintenance(props, id) {
  const removeId = (id) => {
    axios
        .delete(`https://carsalesbackend.herokuapp.com/api/inventory/${id}`)
      .then(res => {
        window.location(false);
        console.log(window.locate)
        
      })
      .catch(err => {
        alert((err.message = "Vehicle failed to delete"));
        console.log(err.response);
      });
  };

  const [neon, setNeo] = useState();
  // const [current, send] = useMachine(confirmationFlow);
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
        
        <div>
        <OverlayTrigger
  
            overlay={
            
              <Tooltip id="tooltip-left">
                <strong>Adds a new vehicle</strong>.
              </Tooltip>}>
          <Link to="/addvehicle"><Button>Add New Vehicle</Button></Link>
            </OverlayTrigger>
      </div>   

        <Container>
 
              {neon.map(vehicle => {
                return (
                 
                  <Largebox key={vehicle.id}>
                    <PicturesBox>
                       {imageIds && imageIds.map((imageId, index) => (
                         <Image
                           key={index}
                           cloudName="dd1erw65b"
                          //uncomment to get pictures  publicId={imageId}
                           width="100"
                           crop="scale"
                         />
                        ))}
                    </PicturesBox>
                    
                    <Largebox>
                      <Smallerboxes>
                        <StyledLink  to={`/vehicles/${vehicle.id}`} >
                        <p>ID</p>
                        <h4 >{vehicle.id}</h4>
                        </StyledLink>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>VIN</p>
                        <h6>{vehicle.vin}</h6>
                      </Smallerboxes>
                      <Smallerboxes >
                        <p>License</p>
                        <h6>{vehicle.license_plate}</h6>
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
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Exterior</p>
                        <h4>{vehicle.color_exterior} </h4>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Interior</p>
                        <h4>{vehicle.color_interior} </h4>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Fabric</p>
                        <h4>{vehicle.fabric} </h4>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Engine</p>
                        <h4>{vehicle.engine_size} </h4>
                      </Smallerboxes>                      
                      <Smallerboxes>
                        <p>Cylinders</p>
                        <h4>{vehicle.cylinders} </h4>
                      </Smallerboxes>
                      <Smallerboxes>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Transmission</p>
                        <h4>{vehicle.transmission} </h4>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Drivetrain</p>
                        <h4>{vehicle.drivetrain} </h4>
                      </Smallerboxes>
                      <Smallerboxes>
                        <p>Warranty</p>
                        <h4>{vehicle.warranty} </h4>
                      </Smallerboxes>      
                      <Smallerboxes>
                      
                        <Link to={`/edit/${vehicle.id}`}>
                        <EditButton>
                            Edit 
                             
                        </EditButton>
                        </Link>   
           {/*-------------------------------------Delete Button Modal---------------------------- */}
                        <DeleteButton onClick={() => {if(window.confirm('Are you sure to delete this record?'))
                          {removeId(vehicle.id)}
                        }}>
                            Delete 
                          </DeleteButton>
                        <div>


</div>


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

