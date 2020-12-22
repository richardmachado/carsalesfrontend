import React, { Component } from 'react'

import {Products, ProductRows} from './styles'

export default class PortableSupplies extends Component {
    render() {
        return (
            <div>
                <h1> Portable Pet Supplies</h1>

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
                    <img src="https://cdn.shopify.com/s/files/1/0428/8525/1221/products/Screenshot2020-07-16at2.14.00PM_370x.png?v=1607301145" alt="food bowl"/>
                    <h3>Portable Food Container</h3>
                    <h4> 6 reviews</h4>
                    <h5><span style={{textDecoration:"line-through"}}>$17.99</span> $14.99</h5>
                    <button>Add to Cart</button>
                </div>

                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0428/8525/1221/products/product-image-1344458388_370x.jpg?v=1607301126" alt="bicycle dog pouch"/>
                    <h3>Bicycle Dog Pouch</h3>
                    <h4> 8 reviews</h4>
                    <h5> $50.99</h5>
                    <button>Add to Cart</button>
                </div>
                    </ProductRows>
                    <ProductRows>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0428/8525/1221/products/product-image-1551321144_370x.jpg?v=1607301055" alt="dog backpack"/>
                    <h3>Breathable Dog Carrier BagPortable Food Corntainer</h3>
                    <h4> 9 reviews</h4>
                    <h5> $49.99</h5>
                    <button>Add to Cart</button>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0428/8525/1221/products/product-image-1589254926_370x.jpg?v=1607301209" alt="Pet Drinking Bottle"/>
                    <h3>Portable Food Container</h3>
                    <h4>11 reviews</h4>
                    <h5><span style={{textDecoration:"line-through"}}>$23.87</span> $18.99</h5>
                    <button>Add to Cart</button>
                        </div>
                        </ProductRows>
                </Products>

            </div>
        )
    }
}
