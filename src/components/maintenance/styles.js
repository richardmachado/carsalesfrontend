import styled from 'styled-components'


export const Largebox = styled.div`
width:100%;
border:solid blue 1px;
display:flex;
padding-bottom:2rem;
margin-bottom:1rem;
`
export const PicturesBox = styled.div`
width:80rem;
border:solid pink 1px
`

export const VehicleInfoBox = styled.div`
border:solid red 1px;

`
export const AddNewVehicle = styled.button`
background-color:#66ccff;
margin-bottom: 2rem;
`

export const StyledForm = styled.div`
display: flex;
flex-direction: column;
`

export const Button = styled.button `
font-size: 21px;
padding: 5px 20px;
border: 0;
background-color: #DADADA;
color: #fff;
border-radius: 3px;
transition: all 250ms ease-in-out;
cursor: pointer;
&:hover {
  background-color: #FFB90F;
}
&:focus {
  outline: none;
`

export const Inputs = styled.input `
margin-top: 1px;
min-width: 18em;
height: 37px;
padding: 0px 10px;
font-size: 15px;
font-family: "Open Sans", sans-serif;
background-color: #f3f3f3;
border: 0;
border-radius: 4px;
margin-bottom: 31px;
transition: all 250ms ease-in-out;
`