import React, { Component } from 'react'

export default class Treats extends Component {
    render() {
        return (
            <div>
                <h1>Treats</h1>

                <h3>Sort by <select type="dropdown">
                <option value="V6">Featured</option>
                <option value="V8">Best Selling</option>
                <option value="V10">Alphabetically: A-Z</option>
                <option value="V12">Alphabetically: Z-A</option>
                <option value="V16">Price: High to Low</option>
                <option value="V16">Price: Low to High</option>
                <option value="V16">Date: Old to New</option>
                <option value="V16">Price: New to Old</option>
                </select></h3>

                <p>Sorry, no treats available</p>
            </div>
        )
    }
}
