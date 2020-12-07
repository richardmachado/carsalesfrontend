import React, { Component } from 'react'
import dealer from "./pictures/car-dealer.jpg"
import styled from 'styled-components';

const Photo = styled.img`
width:80%;
height: 10%;
`
const Usedcars = styled.h1`
display: block;
font-size: 1.5em;
margin-block-start: 0.83em;
margin-block-end: 0.83em;
margin-inline-start: 0px;
margin-inline-end: 0px;
`
export class Home extends Component {
    render() {
        return (
            <div className="home">
             <Photo src={dealer}  alt="logo" />
                <Usedcars>Used cars</Usedcars>
            </div>
        )
    }
}

export default Home
