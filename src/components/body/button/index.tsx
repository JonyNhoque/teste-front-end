import React from "react";
import '../../../styles/components/body/button.scss'

const Button = (props: any) =>{
    return(
        <div className='button__container'>
            <button className='button__body'>{props.text}</button>
        </div>
    )
}

export default Button