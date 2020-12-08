import { useState } from 'react';
import Modal from 'react-modal'
import { useForm } from "react-hook-form";
import axios from 'axios';
import {StyledForm, Inputs, Button} from './styles'

export default function AddNewVehicleModal (props) {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        axios
          .post("https://carsalesbackend.herokuapp.com/api/inventory", data)
          .then(res => {
            props.history.push("/maintenance")
          })
          .catch(err => {
            alert((err.message = "Tema failed"));
            console.log(err.response);
          });
      };

    return (<div>
        <button onClick={() => setModalIsOpen(true)}>Add New Vehicle</button>
        <Modal isOpen={modalIsOpen}
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

        <StyledForm>
        <label htmlFor="year"> </label>
          <Inputs 
            type="text"  
            placeholder="Year" 
            id="year"
            name="year" 
            aria-invalid={errors.year ? 'true' : 'false'}
            aria-describedby="error-year-required error-year-maxLength"
            ref={register({required: true, minLength: 1, maxLength: 4})} 
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
          display: errors.name && errors.name.type === "maxLength"
            ? "block"
            : "none"
        }}
                ></span>


 {/* End of year  -------------------------------------------------------------------------------              */}

<label htmlFor="make"> </label>
          <Inputs 
            type="text"  
            placeholder="Make" 
            id="make"
            name="make" 
            aria-invalid={errors.make ? 'true' : 'false'}
            aria-describedby="error-make-required error-make-maxLength"
            ref={register({required: true, minLength: 1, maxLength: 4})} 
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
            ref={register({required: true, minLength: 1, maxLength: 4})} 
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
            ref={register({required: true, minLength: 1, maxLength: 4})} 
          />
          <span
        role="alert"
        id="error-make-required"
        style={{
          display: errors.name && errors.name.type === "required"
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
          display: errors.name && errors.name.type === "maxLength"
            ? "block"
            : "none"
        }}
                ></span>           
                
 {/* End of price  -------------------------------------------------------------------------------              */}   


                    <Button>Add Tema</Button>
                    
                    </StyledForm>



        <button onClick={()=>setModalIsOpen(false)}>Close</button>
        </Modal>
        </div>
        )
    }
