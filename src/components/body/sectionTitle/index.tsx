import React from "react";
import '../../../styles/components/body/sectionTitle.scss'

const SectionTitle = (props: any) =>{
    return(
        <div className='sectionTitle__container'>
            <h2 className='sectionTitle__text'>{props.text}</h2>
        </div>
    )
};

export default SectionTitle