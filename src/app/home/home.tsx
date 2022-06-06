import React from 'react';
import Body from '../../components/body';
import Header from '../../components/header';
import ProductDisplay from '../../components/productDisplay';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Body />
      <ProductDisplay />
    </div>
  );
}