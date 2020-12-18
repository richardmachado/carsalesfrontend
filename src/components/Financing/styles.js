
import styled from 'styled-components'

export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 80%%;
  margin: 20vh auto;
  box-shadow: 15px 20px 70px -10px;
  @media (max-width: 1200px) {
    margin-left:3rem;
  }
`


export const Header = styled.h1`
padding-bottom:1rem
`

export const Labels = styled.label`
font-size:1.8rem;
padding-bottom:1rem
`

export const Results = styled.h4`
font-size:2.3 rem;
padding-bottom:1rem;
padding-top:1rem;
color:#2805a8
`

export const Inputs = styled.input`
height:2.5rem;
margin-left:2rem;
`

export const Button = styled.input`
font-size: 21px;
padding: 5px 20px;
border: 0;
background-color: black;
color: #fff;
border-radius: 3px;
transition: all 250ms ease-in-out;
cursor: pointer;
&:hover {
  background-color: green;
}
&:focus {
  outline: none;
`