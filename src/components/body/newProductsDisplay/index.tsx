import React from "react";
import '../../../styles/components/body/newProductsDisplay.scss'
import '../../../assets/images/image 48.png'
import Button from "../button";

const NewProductsDisplay = () =>{
    return(
        <div className='newProductsDisplay__container'>
            <div className='newProductsDisplay__imgHolder'>
                <img src={require('../../../assets/images/image 48.png')} />
            </div>
            <div className='newProductsDisplay__textButtonContainer'>
                <h1 className='newProductsDisplay__text'>As melhores guias para os melhores passeios.</h1>
                <Button text='confira' />
            </div>
        </div>
    )
}

export default NewProductsDisplay; 