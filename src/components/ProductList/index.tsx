import React from 'react';
import '~/styles/components/productsList.css';

const ProductsList = () => {
  return (
    <div className="productsList">
      <div className="productsList__heading">
        <h3>Meu cachorro...</h3>
        <div className="productsList__categoria"></div>
      </div>
      <div className="productsList__display"></div>
      <div className="productsList__footer"></div>
    </div>
  );
};

export default ProductsList;
