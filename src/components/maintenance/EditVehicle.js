import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import axios from 'axios';
import { withRouter } from 'react-router-dom'

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


    const handleChange = ({ target }) => {
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
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1>Edit Vehicle</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                                <label htmlFor="vin">Vin</label>
                            <input type="text"
                                name='vin' value={getVehicleDataById.vin}
                                onChange={handleChange}
                                className="form-control"
                                id="vin"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="license_plate">License Plate</label>
                                <input type="text"
                                    name='license_plate'
                                    value={getVehicleDataById.license_plate}
                                
                                    onChange={handleChange}
                                    className="form-control"
                                    id="license_plate"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="year">Year</label>
                                <input type="text" name='year'
                                value={getVehicleDataById.year} onChange={handleChange} className="form-control" id="year"></input>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="name">Make</label>
                                <input type="text" name='make' value={getVehicleDataById.make} onChange={handleChange} className="form-control" id="make"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="model">Model</label>
                                <input type="text" name='model' value={getVehicleDataById.model} onChange={handleChange} className="form-control" id="model"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="engine_size">Engine Size</label>
                                <input type="text" name='engine_size' value={getVehicleDataById.engine_size} onChange={handleChange} className="form-control" id="engine_size"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="cylinders">Cylinders</label>
                                <input type="text" name='cylinders' value={getVehicleDataById.cylinders} onChange={handleChange} className="form-control" id="cylinders"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="transmission">Transmission</label>
                                <input type="text" name='transmission' value={getVehicleDataById.transmission} onChange={handleChange} className="form-control" id="transmission"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="drivetrain">Drive Train</label>
                                <input type="text" name='drivetrain' value={getVehicleDataById.drivetrain} onChange={handleChange} className="form-control" id="drivetrain"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="body_type">Body Type</label>
                                <input type="text" name='body_type' value={getVehicleDataById.body_type} onChange={handleChange} className="form-control" id="body_type"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="mileage">Mileage</label>
                                <input type="text" name='mileage' value={getVehicleDataById.mileage} onChange={handleChange} className="form-control" id="mileage"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="mileage">Fuel Econonmy</label>
                                <input type="text" name='fuel_economy' value={getVehicleDataById.fuel_economy} onChange={handleChange} className="form-control" id="fuel_economy"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input type="text" name='price' value={getVehicleDataById.price} onChange={handleChange} className="form-control" id="price"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="color_interior">Interior Color</label>
                                <input type="text" name='color_interior' value={getVehicleDataById.color_interior} onChange={handleChange} className="form-control" id="color_interior"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="color_exterior">Exterior Color</label>
                                <input type="text" name='color_exterior' value={getVehicleDataById.color_exterior} onChange={handleChange} className="form-control" id="color_exterior"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="fabric">Fabric</label>
                                <input type="text" name='fabric' value={getVehicleDataById.fabric} onChange={handleChange} className="form-control" id="fabric"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="warranty">Warranty</label>
                                <input type="text" name='warranty' value={getVehicleDataById.warranty} onChange={handleChange} className="form-control" id="warranty"></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="text" name='description' value={getVehicleDataById.description} onChange={handleChange} className="form-control" id="description"></input>
                            </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default withRouter(EditVehicle)

