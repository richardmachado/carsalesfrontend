import React, { Component } from 'react'
// import dealer from "../pictures/car-dealer.jpg"
// import Image from 'react-bootstrap/Image'
import dog from './dog.jpg'
import {
    Photo,
    MainText,
    BelowMainText,
    Button
} from './styles';

import {Link} from 'react-router-dom'
export class Home extends Component {
    render() {
        return (
            <div>
                <Photo src={dog} fluid alt="dog"/>
                <MainText>Ultimate Outdoor Experience</MainText>
                <BelowMainText>Find portable pet products right at your fingertips. No more endless searching!</BelowMainText>
                <Link to="/products">
                <Button>Shop now!</Button>
                </Link>
                <h1>Today's Deals</h1>
            </div>
        )
    }
}

export default Home
