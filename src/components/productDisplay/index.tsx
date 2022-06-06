import React from "react";
import '../../styles/components/productDisplay/productDisplay.scss';
import SectionTitle from "../body/sectionTitle";
import ProductCarousel from "./productCarousel";
import ProductCategoryCarousel from "./productCategoryCarousel";

const ProductDisplay = () =>{
    return(
        <div className='productDisplay'>
            <div className='productDisplay__header'>
                <SectionTitle text='Meu Cachorro...' />
                    <div className='productDisplay__carousel'>       
                        <ProductCategoryCarousel />
                    </div>
            </div>
            {/* <ProductCarousel /> */}
        </div>
    )
}

export default ProductDisplay;