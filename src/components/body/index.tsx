import React from "react";
import CategoryCarousel from "./categoryCarousel";
import NewProductsDisplay from "./newProductsDisplay";

const Body = () =>{
    return(
        <div className='body__container'>
            <NewProductsDisplay />
            <CategoryCarousel />
        </div>
    )
}

export default Body