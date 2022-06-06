import React from "react";
import '../../../../styles/components/productDisplay/ProductCategoryCarousel/categoryItem.scss'

const CategoryItem = (props: any) =>{
    return(
        <div className='categoryItem'>
            <button className='categoryItem__body'>{props.text}</button>
        </div>
    )
}

export default CategoryItem