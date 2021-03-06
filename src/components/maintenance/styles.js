import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Body = styled.div`
background-color:#dadee6;

`
export const Container = styled.div`
grid-row:auto;
flex-wrap:wrap
background-color:blue
`

export const Largebox = styled.div`
width:100%;
height:5rem;
display:flex;
flex-direction:row;
justify-content:space-between;
padding-bottom:7rem;
border: solid blue 1px;
margin-bottom:2rem;
margin-left:1rem;
`
export const Smallerboxes = styled.div`
display:flex;
flex-direction:column;

`

export const PicturesBox = styled.div`
width:10rem;
// border:solid pink 1px
`

export const VehicleInfoBox = styled.div`
// border:solid red 1px;
`

export const AddNewVehicle = styled.button`
background-color:#66ccff;
margin-bottom: 2rem;
`

export const Button = styled.button `
font-size: 21px;
padding: 5px 20px;
margin-bottom:2rem;
border: 0;
background-color: #000000;
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

export const EditButton = styled.button `
font-size: 21px;
// padding: 5px 20px;
margin-bottom:1rem;
border: 0;
background-color: #000000;
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

export const DeleteButton = styled.button `
font-size: 21px;
padding: 5px 20px;
margin-bottom:2rem;
border: 0;
background-color: #000000;
color: #fff;
border-radius: 3px;
transition: all 250ms ease-in-out;
cursor: pointer;
&:hover {
  background-color: red;

}
&:focus {
  outline: none;
`

export const StyledLink = styled(Link)`
text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
    
`;

