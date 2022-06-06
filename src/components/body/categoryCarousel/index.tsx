import React from "react";
import '../.././../styles/components/body/categoryCarousel.scss'
import SectionTitle from "../sectionTitle";
import './constants'
import { CarouselDisplayItemData } from "./constants";

type CarouselDisplayItemProps = {
    img: string;
    href: string;
    title: string;
}

const DisplayItem = ({img, href, title}: CarouselDisplayItemProps) =>{
    
    console.log(img)
    
    return(
        <li className='categoryCarousel__displayItem'>
            <div className='carouselDisplayItem__imageWrapper'>
                <img src={img} />
                <a href={href}/>
            </div>
            <div className='carouselDisplayItem__title'>
                <h3 className='carouselDisplayItem__titleText'>{title}</h3>
            </div>
        </li>
    )
}

const CategoryCarousel = () =>{
    return(
        <div className='categoryCarousel__container'>
            <div className='categoryCarousel__section'>
                <SectionTitle text='Categorias' />
                <ul className='categoryCarousel__ItemHolder'>
                    {CarouselDisplayItemData.map((item, key) => (
                        <DisplayItem 
                        key={`category-carousel-item-${key}`} 
                        img={item.img} 
                        href={item.href} 
                        title={item.title}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CategoryCarousel