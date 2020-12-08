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
                <Photo src={dealer} alt="logo" />
               

                </Usedcarsborder>
                <Usedcars>Used cars</Usedcars>
            </div>
        )
    }
}

export default Home
