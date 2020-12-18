import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

import { Container, StyledForm, Inputs, Button } from './styles';

function EditVehicle(props) {
    const [getVehicleDataById, setVehicleDataById] = useState([])

    const [editVehicleDataById, latestEdit] = useState([])
    const { register, handleSubmit, errors } = useForm();

    const id = props.match.params.id


    useEffect(() => {
        const getDataById = async () => {
            try {
                const result = await axios.get(`https://carsalesbackend.herokuapp.com/api/inventory/${id}`)
                setVehicleDataById(result.data)
                console.log("results.data", result.data)
            } catch (error) {
                console.log(error)
            }
        }
        getDataById()
    }, [id])


    const handleChange      = ({ target }) => {
        const { name, value } = target

        const newData = Object.assign({}, getVehicleDataById, { [name]: value });
        setVehicleDataById(newData);

        const latestData = Object.assign({}, editVehicleDataById, { [name]: value })
        latestEdit(latestData)
    }
    const onSubmit = () => {
   
            axios
                .put(`https://carsalesbackend.herokuapp.com/api/inventory/${id}`, editVehicleDataById)
                
              .then(res => {
                 
                    props.history.push("/maintenance");
                    console.log("response", res);
              })
              .catch(err => {
                alert((err.message = "Editing Vehicle Failed"));
                console.log(err.response);
              });
          };
    return (
        <Container>
            <StyledForm>
                <div className='col-4'>
                <Link to ="/maintenance"><Button>Cancel</Button></Link>
                    <h1>Edit Vehicle</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                   
                                <label htmlFor="vin">Vin</label>
                            <Inputs type="text"
                                name='vin' value={getVehicleDataById.vin}
                                aria-invalid={errors.vin ? 'true' : 'false'}
                                aria-describedby="error-vin-required error-vin-maxLength"
                                ref={register({required: true, minLength: 1, maxLength: 17})} 
                                onChange={handleChange}
     
                                id="vin"/>
                              <span
                                role="alert"
                                id="error-name-required"
                                style={{
                                display: errors.vin && errors.vin.type === "required"
                                    ? "block"
                                    : "none"
                                }}
                            >
                                Vin number is required
                            </span>
                            <span
                                role="alert"
                                id="error-name-maxLength"
                                style={{
                                display: errors.vin && errors.vin.type === "maxLength"
                                    ? "block"
                                    : "none"
                                }}
                                    >Too many characters</span>
                                        <span
                                role="alert"
                                id="error-name-minLength"
                                style={{
                                display: errors.vin && errors.vin.type === "minLength"
                                    ? "block"
                                    : "none"
                                }}
                                >A vin number is minimum 17 characters</span>
                            {/* End of vin -----------------------------------------------  */}
                            
                     

                            
                                <label htmlFor="license_plate">License Plate</label>
                                <Inputs type="text"
                                    name='license_plate'
                                    value={getVehicleDataById.license_plate}
                                
                                    onChange={handleChange}
                                    className="form-control"
                                    id="license_plate"
                                    aria-invalid={errors.license_plate ? 'true' : 'false'}
    
                                    ref={register({required: false})} />
            
                         {/* End of license plate  -----------------------------------------------  */}

                           
                                <label htmlFor="year">Year</label>
                        <Inputs
                            type="text"
                            name='year'
                            value={getVehicleDataById.year}
                            onChange={handleChange} className="form-control" id="year"
                            // aria-invalid={errors.year ? 'true' : 'false'}
                            aria-describedby="error-year-required error-year-maxLength"
                            ref={register({required: true, minLength: 4, maxLength: 4})} 
                        />
                         <span
                            role="alert"
                            id="error-year-required"
                            style={{
                            display: errors.year && errors.year.type === "required"
                                ? "block"
                                : "none"
                            }}
                        >
                            Year is required
                        </span>
                        <span
                            role="alert"
                            id="error-year-maxLength"
                            style={{
                            display: errors.year && errors.year.type === "maxLength"
                                ? "block"
                                : "none"
                            }}
                                >Too many characters</span>
                                    <span
                            role="alert"
                            id="error-year-minLength"
                            style={{
                            display: errors.year && errors.year.type === "minLength"
                                ? "block"
                                : "none"
                            }}
                                >Year is minimum 4 characters</span>
                           
            {/* End of year -------------------------- */}
                        
                           
                                <label htmlFor="name">Make</label>
                        <Inputs type="text" name='make' value={getVehicleDataById.make} onChange={handleChange} className="form-control" id="make" aria-invalid={errors.make ? 'true' : 'false'}
                            aria-describedby="error-make-required error-make-maxLength"
                            ref={register({ required: true })} />
                         <span
                        role="alert"
                        id="error-make-required"
                        style={{
                        display: errors.make && errors.make.type === "required"
                            ? "block"
                            : "none"
                        }}
                    >
                        Make is required
                    </span>
                    <span
                        role="alert"
                        id="error-name-maxLength"
                        style={{
                        display: errors.name && errors.name.type === "maxLength"
                            ? "block"
                            : "none"
                        }}
                                >Make is too long</span>
                    
                        {/* End of make  -------------------------------------------------------------------------------              */}
                        

                            <div className="form-group">
                                <label htmlFor="model">Model</label>
                                <Inputs type="text" name='model' value={getVehicleDataById.model} onChange={handleChange} className="form-control" id="model" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="engine_size">Engine Size</label>
                                <Inputs type="text" name='engine_size' value={getVehicleDataById.engine_size} onChange={handleChange} className="form-control" id="engine_size" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cylinders">Cylinders</label>
                                <Inputs type="text" name='cylinders' value={getVehicleDataById.cylinders} onChange={handleChange} className="form-control" id="cylinders" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="transmission">Transmission</label>
                                <Inputs type="text" name='transmission' value={getVehicleDataById.transmission} onChange={handleChange} className="form-control" id="transmission" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="drivetrain">Drive Train</label>
                                <Inputs type="text" name='drivetrain' value={getVehicleDataById.drivetrain} onChange={handleChange} className="form-control" id="drivetrain" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="body_type">Body Type</label>
                                <Inputs type="text" name='body_type' value={getVehicleDataById.body_type} onChange={handleChange} className="form-control" id="body_type" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mileage">Mileage</label>
                                <Inputs type="text" name='mileage' value={getVehicleDataById.mileage} onChange={handleChange} className="form-control" id="mileage" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mileage">Fuel Econonmy</label>
                                <Inputs type="text" name='fuel_economy' value={getVehicleDataById.fuel_economy} onChange={handleChange} className="form-control" id="fuel_economy" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <Inputs type="text" name='price' value={getVehicleDataById.price} onChange={handleChange} className="form-control" id="price" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="color_interior">Interior Color</label>
                                <Inputs type="text" name='color_interior' value={getVehicleDataById.color_interior} onChange={handleChange} className="form-control" id="color_interior" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="color_exterior">Exterior Color</label>
                                <Inputs type="text" name='color_exterior' value={getVehicleDataById.color_exterior} onChange={handleChange} className="form-control" id="color_exterior" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fabric">Fabric</label>
                                <Inputs type="text" name='fabric' value={getVehicleDataById.fabric} onChange={handleChange} className="form-control" id="fabric" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="warranty">Warranty</label>
                                <Inputs type="text" name='warranty' value={getVehicleDataById.warranty} onChange={handleChange} className="form-control" id="warranty" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <Inputs type="text" name='description' value={getVehicleDataById.description} onChange={handleChange} className="form-control" id="description" />
                            </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </StyledForm>
        </Container>
    )
}


export default withRouter(EditVehicle)

