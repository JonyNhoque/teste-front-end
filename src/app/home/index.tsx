import React from 'react';
import ProductsList from '~/components/ProductList';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <ProductsList />
    </div>
  );
}
