import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container, StyledForm, Inputs, Button } from './styles';
// import ConfirmationModal from "./ConfirmationModal";
import {Link} from 'react-router-dom';

export default function AddVehicle(props) {

  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [fileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState();

  
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  
  const uploadImage = async (base64EncodedImage) => {
    try {
 
      await fetch('https://carsalesbackend.herokuapp.com/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage}),
        headers: { "content-type": 'application/json' }
      })
        .then((response) => {
        return response.text();
      })

    } catch (error) {
      console.log(error)
    }
  } 

  const onSubmit = data => {
    if (!previewSource) return;
    uploadImage(previewSource);
      setLoading(true);
        axios
            .post("https://carsalesbackend.herokuapp.com/api/inventory", data)
          .then(res => {
              console.log(data)
                props.history.push("/maintenance");
                console.log(res);
          })
          .catch(err => {
            alert((err.message = "Adding Vehicle Failed"));
            console.log(err.response);
          });
      };

    return (
      <Container>
        <Link to ="/maintenance"><Button>Cancel</Button></Link>
        <h2>Add New Vehicle</h2>
        
            
            <form onSubmit={handleSubmit(onSubmit)}>
          <StyledForm>
          <label htmlFor="vin"> </label>
              <Inputs 
                type="text"  
                placeholder="Vin Number" 
                id="vin"
              name="vin" 
              defaultValue="1Z000000000000000"
                aria-invalid={errors.vin ? 'true' : 'false'}
                aria-describedby="error-vin-required error-vin-maxLength"
                ref={register({required: true, minLength: 17, maxLength: 17})} 
              />
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

    
    
            {/* End of vin  -------------------------------------------------------------------------------              */}
            
            <label htmlFor="Licence"> </label>
              <Inputs 
                type="text"  
                placeholder="License Plate- can leave blank" 
                id="license_plate"
                name="license_plate"

                aria-invalid={errors.license_plate ? 'true' : 'false'}
  
                ref={register({required: false})} 
              />
              {/* End of license plate  -------------------------------------------------------------------------------              */}
            <label htmlFor="year"> </label>
              <Inputs 
                type="text"  
                placeholder="Year" 
                id="year"
              name="year"
              defaultValue="2015"
                aria-invalid={errors.year ? 'true' : 'false'}
                aria-describedby="error-year-required error-year-maxLength"
                ref={register({required: true, minLength: 4, maxLength: 4})} 
              />
              <span
            role="alert"
            id="error-name-required"
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
            id="error-name-maxLength"
            style={{
              display: errors.year && errors.year.type === "maxLength"
                ? "block"
                : "none"
            }}
                >Too many characters</span>
                     <span
            role="alert"
            id="error-name-minLength"
            style={{
              display: errors.year && errors.year.type === "minLength"
                ? "block"
                : "none"
            }}
            >Minimum 4 characters</span>
            <Inputs
              type="file"
              name="image"
              onChange={ handleFileInputChange}
              value={ fileInputState }
              className="form-input"
            />
            {previewSource && (
              <img src={previewSource} alt="chosen" style={{height:"200px", width:'200px'}} />
            )}
    
    
     {/* End of year  -------------------------------------------------------------------------------              */}
    
    <label htmlFor="make"> </label>
              <Inputs 
                type="text"  
                placeholder="Make" 
                id="make"
              name="make"
              defaultValue="Toyota"
                aria-invalid={errors.make ? 'true' : 'false'}
                aria-describedby="error-make-required error-make-maxLength"
                ref={register({required: true, minLength: 1, maxLength: 24})} 
              />
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
    
                    <label htmlFor="model"> </label>
              <Inputs 
                type="text"  
                placeholder="Model" 
                id="model"
              name="model"
              defaultValue="Corolla"
                aria-invalid={errors.model ? 'true' : 'false'}
                aria-describedby="error-model-required error-model-maxLength"
                ref={register({required: true, minLength: 1, maxLength: 24})} 
              />
              <span
            role="alert"
            id="error-make-required"
            style={{
              display: errors.make && errors.make.type === "required"
                ? "block"
                : "none"
            }}
          >
            Model is required
          </span>
          <span
            role="alert"
            id="error-name-maxLength"
            style={{
              display: errors.name && errors.name.type === "maxLength"
                ? "block"
                : "none"
            }}
                    ></span>
     {/* End of model  -------------------------------------------------------------------------------              */}                
     <label htmlFor="body_type"> </label>
              <Inputs 
                type="text"  
                placeholder="Body Type: SUV, Sedan, etc" 
                id="body_type"
              name="body_type"
              defaultValue="Sedan"
                aria-invalid={errors.body_type ? 'true' : 'false'}
                aria-describedby="error-body_type-required error-body_type-maxLength"
                ref={register({required: true, minLength: 1, maxLength: 24})} 
              />
              <span
            role="alert"
            id="error-body_type-required"
            style={{
              display: errors.body_type && errors.body_type.type === "required"
                ? "block"
                : "none"
            }}
          >
            Body Type is required
          </span>
          <span
            role="alert"
            id="error-body_type-maxLength"
            style={{
              display: errors.name && errors.name.type === "maxLength"
                ? "block"
                : "none"
            }}
                    >Too long</span>
     {/* End of model  -------------------------------------------------------------------------------              */}          
    
                    <label htmlFor="Mileage"> </label>
              <Inputs 
                type="text"  
                placeholder="Mileage" 
                id="mileage"
              name="mileage"
              defaultValue="2000"
                aria-invalid={errors.make ? 'true' : 'false'}
                aria-describedby="error-make-required error-make-maxLength"
                ref={register({required: true, minLength: 1, maxLength: 10})} 
              />
              <span
            role="alert"
            id="error-make-required"
            style={{
              display: errors.mileage && errors.mileage.type === "required"
                ? "block"
                : "none"
            }}
          >
            Mileage is required
          </span>
          <span
            role="alert"
            id="error-name-maxLength"
            style={{
              display: errors.mileage && errors.mileage.type === "maxLength"
                ? "block"
                : "none"
            }}
            >Too many miles</span>
                    
            {/* End of mileage  -------------------------------------------------------------------------------              */}   
            <label htmlFor="fuel_economy"> </label>
              <Inputs 
                type="text"  
                placeholder="Fuel Economy" 
                id="fuel_economy"
              name="fuel_economy"
              defaultValue="25 HWY 20 CITY"
                aria-invalid={errors.fuel_economy ? 'true' : 'false'}
                aria-describedby="error-fuel_economy-required"
                ref={register({required: true, minLength: 1})} 
              />
              <span
            role="alert"
            id="error-fuel_economy-required"
            style={{
              display: errors.fuel_economy && errors.fuel_economy.type === "required"
                ? "block"
                : "none"
            }}
          >
            Fuel Economy is required
          </span>
      
                    
            {/* End of Fuel Economy  -------------------------------------------------------------------------------              */} 
            
                    
                <label htmlFor="price"> </label>
              <Inputs 
                type="text"  
                placeholder="Price, no commas or special characters" 
                id="price"
              name="price"
              defaultValue="20000"
                aria-invalid={errors.price ? 'true' : 'false'}
                aria-describedby="error-price-required error-price-maxLength"
                ref={register({required: true, minLength: 1, maxLength: 8})} 
              />
              <span
            role="alert"
            id="error-price-required"
            style={{
              display: errors.price && errors.price.type === "required"
                ? "block"
                : "none"
            }}
          >
            Price is required
          </span>
          <span
            role="alert"
            id="error-name-maxLength"
            style={{
              display: errors.price && errors.price.type === "maxLength"
                ? "block"
                : "none"
            }}
                    >Price is too high</span>           
                    
     {/* End of price  -------------------------------------------------------------------------------              */}   
    
     <label htmlFor="engine_size"> </label>
              <Inputs 
                type="text"  
                placeholder="Engine Size (Liters)" 
                id="engine_size"
              name="engine_size"
              defaultValue="2.3L"
                aria-invalid={errors.engine_size ? 'true' : 'false'}
                aria-describedby="error-engine_size-required error-engine_size-minLength"
                ref={register({required: true, minLength: 1})} 
              />
              <span
            role="alert"
            id="error-engine_size-required"
            style={{
              display: errors.engine_size && errors.engine_size.type === "required"
                ? "block"
                : "none"
            }}
          >
            Engine Size is required
          </span>
      
                    
            {/* End of engine size  -------------------------------------------------------------------------------              */}  
            
            <p>Cylinders</p>
                  <select name="cylinders" ref={register}>
                  <option value="V4">V4</option>
              <option value="V6">V6</option>
              <option value="V8">V8</option>
              <option value="V10">V10</option>
              <option value="V12">V12</option>
              <option value="V16">V16</option>
  
          </select>    
      
                    
            {/* End of Cylinders  -------------------------------------------------------------------------------              */}
            <p>Transmission</p>
                  <select name="transmission" ref={register}>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual </option>
  
    
          </select>         
                    
            {/* End of Tranmission  -------------------------------------------------------------------------------*/}   
            
            <label htmlFor="color_interior"> </label>
              <Inputs 
                type="text"  
                placeholder="Interior Color" 
                id="color_interior"
              name="color_interior"
              defaultValue="Blue"
                aria-invalid={errors.color_interior ? 'true' : 'false'}
                aria-describedby="error-color_interior-required"
                ref={register({required: true, minLength: 1})} 
              />
              <span
            role="alert"
            id="error-color_interior-required"
            style={{
              display: errors.color_interior && errors.color_interior.type === "required"
                ? "block"
                : "none"
            }}
          >
            Interior Color is required
          </span>
      
                    
            {/* End of Interior Color  -------------------------------------------------------------------------------              */} 
            
              <label htmlFor="color_exterior"> </label>
              <Inputs 
                type="text"  
                placeholder="Exterior Color" 
                id="color_exterior"
              name="color_exterior"
              defaultValue="Blue"
                aria-invalid={errors.color_exterior ? 'true' : 'false'}
                aria-describedby="error-color_exterior-required error-color_exterior-maxLength"
                ref={register({required: true, minLength: 1})} 
              />
              <span
            role="alert"
            id="error-color_exterior-required"
            style={{
              display: errors.color_exterior && errors.color_exterior.type === "required"
                ? "block"
                : "none"
            }}
          >
            Exterior Color is required
          </span>
      
                    
          {/* End of Exterior Color  -------------------------------------------------------------------- */}   
                <p>Interior Fabric</p>
                  <select name="fabric" ref={register}>
                  <option value="Cloth">Cloth</option>
                  <option value="Leather">Leather </option>
  
    
          </select>         
                    
        {/* End of Fabric  -------------------------------------------------------------------------------*/}   
                    <p>drivetrain</p>
                  <select name="drivetrain" ref={register}>
                  <option value="2WD">2WD</option>
                  <option value="4WD">4WD</option>
                  <option value="AWD">AWD</option>
    
          </select>         
                    
        {/* End of drivetrain  -------------------------------------------------------------------------------*/}   
                    
        <p>warranty</p>
        <select name="warranty" ref={register}>
            <option value="none">no</option>
            <option value="yes">yes</option>
    
          </select>
     
                    
     {/* End of Warranty  -------------------------------------------------------------------------------*/}   
    
    
    
                    <label htmlFor="description"> </label>
              <Inputs 
                type="text"  
                placeholder="Enter your description here" 
                id="description"
              name="description"
              defaultValue="Super nice ride, you are going to love it"
                aria-invalid={errors.description ? 'true' : 'false'}
                aria-describedby="error-description-required error-description-maxLength"
                ref={register({required: true, minLength: 1, maxLength: 1024})} 
              />
              <span
            role="alert"
            id="error-price-required"
            style={{
              display: errors.description && errors.description.type === "required"
                ? "block"
                : "none"
            }}
          >
            Description is required
          </span>
          <span
            role="alert"
            id="error-name-maxLength"
            style={{
              display: errors.description && errors.description.type === "maxLength"
                ? "block"
                : "none"
            }}
                    >Description too long</span>           
                    
                    {/* End of Description  -------------------------------------------------------------------------------*/} 
                    {!isLoading && <Button>Add Vehicle  </Button>}

  {isLoading && (
    <Button>
      <i className="fas fa-spinner fa-spin" disabled={isLoading}>Adding Vehicle</i>
      </Button>
  )}
                    </StyledForm>
            </form>
        </Container>
        )
    }
