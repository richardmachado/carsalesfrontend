import styled from 'styled-components';

export const Photo = styled.img`
position:relative;
width:100%;
height:100%;

`

export const Usedcarsborder = styled.div`
background-color:#dee3d1;
padding-bottom:2rem;
margin-top:2rem;
`
export const MainText = styled.h1`
position: absolute; 
top: 300px; 
left: 0; 
width: 100%; 
color:white;
font-size:100px;
@media (max-width: 1282px) {
   font-size:80px;
  }
  @media (max-width: 1024px) {
    font-size:50px;
  }  
  @media (max-width: 800px) {
    font-size:40px;
    top:200px
  }  
  @media (max-width: 512px) {
    font-size:30px;
    top:150px
  }  
  @media (max-width: 432px) {
    font-size:20px;
    top:140px
  } 

  @media (max-width: 362px) {
    font-size:15px;
    top:140px
  } 
`

export const BelowMainText = styled.p`
position: absolute; 
top: 400px; 
left: 0; 
width: 100%; 
color:white;
font-size:50px;

@media (max-width: 1282px) {
    font-size:30px;
  }
  @media (max-width: 1082px) {
    font-size:20px;
  }

  @media (max-width: 800px) {
    top: 250px; 
  }  
  @media (max-width: 512px) {
    top:200px
  }
  @media (max-width: 432px) {
    top:180px
  }
  @media (max-width: 362px) {
    font-size:15px;
    top:160px
  }    
`

export const Button = styled.button`
background-color: #3fc1c9;
border-color: #3fc1c9;
color: #fff;
transition: all 0.3s ease;
font-family: "DIN Next",sans-serif;
font-weight: 700;
font-style: normal;
text-transform: initial;
letter-spacing: 0.5px;
border: 1px solid #f2f2f2;
border-radius: 3px;
padding: 16px 24px;
line-height: 1.5;
display: inline-block;
text-align: center;
font-size: 17px;

position: absolute; 
top: 750px;
right:45%; 

@media (max-width: 1282px) {
    position: absolute; 
    top: 500px;
    right:45%; 
  }

  @media (max-width: 1022px) {
    position: absolute; 
    top: 500px;
    right:43%; 
  }
  @media (max-width: 800px) {
    top: 350px; 
    right:40%
  }  
  @media (max-width: 512px) {
   top:300px;
   right:40%
  }  
  @media (max-width: 432px) {

    top:260px;
    right:40%
  } 
  @media (max-width: 362px) {

    top:220px;
    right:30%;
     padding: 8px 18px;
  } 
`