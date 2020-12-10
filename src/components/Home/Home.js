import React, { Component } from 'react'
import dealer from "../pictures/car-dealer.jpg"


import {
    Photo,
    Usedcars,
    Usedcarsborder
} from './styles';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <Usedcarsborder>
                <Usedcars>Static Photo</Usedcars>
                <Photo src={dealer} alt="logo" />
                </Usedcarsborder>

                <Usedcarsborder>
                <Usedcars>Photo Carousel</Usedcars>
                <Photo src={dealer} alt="logo" />
                </Usedcarsborder>



            </div>
        )
    }
}

export default Home
