import React from "react";
import '../../styles/components/productDisplay/productDisplay.scss';
import SectionTitle from "../body/sectionTitle";
import ProductCarousel from "./productCarousel";

const ProductDisplay = () =>{
    return(
        <div className='productDisplay'>
            <SectionTitle text='Meu Cachorro...' />
            <ProductCarousel />
        </div>
    )
}

export default ProductDisplay;