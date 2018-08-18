import React, { Component } from 'react';
import './ProductCard.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      productList: []
    };
  }

  componentDidMount() {
    //fetch the first page
  }

  render() {
    return (
      <div className="listing_content__element">
        <div className="listing_content__element-image">
          <img src="https://picsum.photos/200/200/?random" alt="product" />
        </div>
        <hr />
        <div className="listing_content__element-description">
          <h2>Product Title</h2>
          <p>Product Description</p>
          <span>$16.99</span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
