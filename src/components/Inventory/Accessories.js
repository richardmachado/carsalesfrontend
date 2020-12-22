import React, { Component } from 'react'

import {Products, ProductRows} from './styles'

export default class Accessories extends Component {
    render() {
        return (
            <div>
                <h1> Portable Accessories</h1>

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
                <Products>
                    <ProductRows>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0428/8525/1221/products/product-image-1411677240_370x.jpg?v=16073012035" alt="Reflective Adjustable Dog Seat Belt"/>
                    <h3>Reflective Adjustable Dog Seat Belt</h3>
                    <h4> 11 reviews</h4>
                    <h5><span style={{textDecoration:"line-through"}}>$22.99</span> $14.89</h5>
                    <button>Add to Cart</button>
                </div>

                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0428/8525/1221/products/product-image-1537610752_370x.jpg?v=1607301221" alt="Dog Harness Vest"/>
                    <h3>Dog Harness Vest</h3>
                    <h4> 8 reviews</h4>
                    <h5><span style={{textDecoration:"line-through"}}>$17.25</span> $14.99</h5> 
                    <button>Add to Cart</button>
                </div>
                    </ProductRows>
                    
                    <ProductRows>                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0428/8525/1221/products/product-image-1416744613_370x.jpg?v=1607301149" alt="Pet Flea and Tick Collardog backpack"/>
                    <h3>Pet Flea and Tick Collar</h3>
                    <h4> 10 reviews</h4>
                    <h5> $10.99</h5>
                    <button>Add to Cart</button>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0428/8525/1221/products/product-image-1479830610_370x.jpg?v=1607301163" alt="Reflective Leash Dog Rope"/>
                    <h3>Reflective Leash Dog Rope</h3>
                    <h4>17 reviews</h4>
                    <h5> $21.99</h5>
                    <button>Add to Cart</button>
                        </div>
                        </ProductRows>

                </Products>

            </div>
        )
    }
}
