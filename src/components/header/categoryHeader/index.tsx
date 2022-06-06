import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/components/header/categoryHeader.scss';
import { categoryHeaderData } from './constants';

type CategoryItemsProps = {
  // icon: React.ReactNode | null;
  href: string;
  text: string;
};

const CategoryHeaderItem = ({ text, href }: CategoryItemsProps) => {
  
  return (
    <li className='categoryHeader__item'>
        <NavLink className='categoryHeader__link' to={href}>
          {/* {icon ?  icon : null}  */}
          {text} 
        </NavLink>
    </li>
  );
};

const CategoryHeader = () => {
  return (
    <div className='categoryHeader'>
        <ul className='categoryHeader__list'>
        {categoryHeaderData.map((data: any, key: any) => (
          <CategoryHeaderItem key={`category-header-item-${key}`} href={data.href} text={data.text} />
        ))}
        </ul>
    </div>
  );
};

export default CategoryHeader;