import React from "react";
import '../../../styles/components/body/newProductsDisplay.scss'
import banner from '../../../assets/images/image 48.png'
import Button from "../button";

const NewProductsDisplay = () =>{
    return(
        <div className='newProductsDisplay'>
            <div className='newProductsDisplay__imgHolder'>
                <img className='newProductsDisplay__img' src={banner} />
            </div>
            <div className='newProductsDisplay__textButtonContainer'>
                <h1 className='newProductsDisplay__text'>As melhores guias para os melhores passeios.</h1>
                <Button text='confira' />
            </div>
        </div>
    )
}

export default NewProductsDisplay; 