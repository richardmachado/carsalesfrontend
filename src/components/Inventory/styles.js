import styled from 'styled-components'

export const Body = styled.div`
background-color:#333;
color:white;

`
export const Wrapperbox = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
export const Smallbox = styled.div`
border-bottom:solid black;
display:flex;
flex-direction:column;
padding-bottom:1rem;
padding-left:1rem;
padding-right:1rem;
margin-bottom:1rem;
`

export const SmallboxInfo = styled.div`
font-family: Syncopate,sans-serif;
letter-spacing: .05em;
font-weight: 400;
font-size:2em;
color:#d9d9d9;


`

export const Largebox = styled.div`
width:100%;
border:solid blue 1px;
display:flex;

margin-bottom:1rem;
`
export const PicturesBox = styled.div`
width:80rem;
border:solid pink 1px
`

export const VehicleInfoBox = styled.div`
border:solid red 1px;
color:#d9d9d9;
`

export const VehicleModel = styled.div`
font-family: Lato,Verdana,Arial,sans-serif;
font-weight: 700;
font-size: 16px;
line-height: 31px;
color:#d9d9d9;
`