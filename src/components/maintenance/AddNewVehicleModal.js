import { useState } from 'react';
import Modal from 'react-modal'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { StyledForm, Inputs, Button } from './styles';


export default function AddNewVehicleModal(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const [isLoading, setLoading] = useState(false);

    const onSubmit = data => {
      setLoading(true);
        axios
            .post("https://carsalesbackend.herokuapp.com/api/inventory", data)
          .then(res => {
            console.log(res);
 
          })
          .catch(err => {
            alert((err.message = "Vehicle failed"));
            console.log(err.response);
          });
      };

    return (<div>
        <Button onClick={() => setModalIsOpen(true)}>Add New Vehicle</Button>
        <Modal isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={
   {       overlay: {
     backgroundColor: 'grey'
          },
            content: {
       color:'black'
     }
      }
    }
      >
        <h2>Add New Vehicle</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledForm>
            
        <label htmlFor="year"> </label>
          <Inputs 
            type="text"  
            placeholder="Year" 
            id="year"
            name="year" 
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


 {/* End of year  -------------------------------------------------------------------------------              */}

<label htmlFor="make"> </label>
          <Inputs 
            type="text"  
            placeholder="Make" 
            id="make"
            name="make" 
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
                ></span>
                
 {/* End of make  -------------------------------------------------------------------------------              */}

                <label htmlFor="model"> </label>
          <Inputs 
            type="text"  
            placeholder="Model" 
            id="model"
            name="model" 
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


                <label htmlFor="Mileage"> </label>
          <Inputs 
            type="text"  
            placeholder="Mileage" 
            id="mileage"
            name="mileage" 
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
          display: errors.name && errors.name.type === "maxLength"
            ? "block"
            : "none"
        }}
                ></span>
                
{/* End of mileage  -------------------------------------------------------------------------------              */}   
                
            <label htmlFor="price"> </label>
          <Inputs 
            type="text"  
            placeholder="Price, no commas or special characters" 
            id="price"
            name="price" 
            aria-invalid={errors.price ? 'true' : 'false'}
            aria-describedby="error-price-required error-price-maxLength"
            ref={register({required: true, minLength: 1, maxLength: 10})} 
          />
          <span
        role="alert"
        id="error-price-required"
        style={{
          display: errors.name && errors.name.type === "required"
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
                ></span>           
                
 {/* End of price  -------------------------------------------------------------------------------              */}   

 <label htmlFor="engine"> </label>
          <Inputs 
            type="text"  
            placeholder="Engine" 
            id="engine"
            name="engine" 
            aria-invalid={errors.engine ? 'true' : 'false'}
            aria-describedby="error-price-required error-price-maxLength"
            ref={register({required: true, minLength: 1, maxLength: 128})} 
          />
          <span
        role="alert"
        id="error-price-required"
        style={{
          display: errors.engine && errors.engine.type === "required"
            ? "block"
            : "none"
        }}
      >
        Engine is required
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
                
          {/* End of engine  -------------------------------------------------------------------------------              */}   
                
                <p>drivetrain</p>
    <select name="warranty" ref={register}>
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
            aria-invalid={errors.description ? 'true' : 'false'}
            aria-describedby="error-description-required error-description-maxLength"
            ref={register({required: true, minLength: 1, maxLength: 1024})} 
          />
          <span
        role="alert"
        id="error-price-required"
        style={{
          display: errors.name && errors.name.type === "required"
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
          display: errors.name && errors.name.type === "maxLength"
            ? "block"
            : "none"
        }}
                ></span>           
                
 {/* End of Description  -------------------------------------------------------------------------------*/}   

{!isLoading && <Button>Add Vehicle  </Button>}

  {isLoading && (
    <Button>
      <i className="fas fa-spinner fa-spin" disabled={isLoading}>Adding Vehicle</i>
      </Button>
  )}          
                </StyledForm>
                </form>
        <button onClick={()=>setModalIsOpen(false)}>Done entering vehicles</button>
        </Modal>
        </div>
        )
    }
