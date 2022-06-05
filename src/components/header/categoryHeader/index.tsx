import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/components/header/categoryHeader.scss';
import { categoryHeaderData } from './constants';

type CategoryItemsProps = {
  Icon: React.ReactNode;
  href: string;
  text: string;
};

const CategoryHeaderItem = ({ Icon, text, href }: CategoryItemsProps) => {
  return (
    <li className='mainHeader__item'>
        <NavLink to={href}>
            {Icon}
            {text}
        </NavLink>
    </li>
  );
};

const CategoryHeader = () => {
  return (
    <div className='categoryHeader__container'>
        {/* <ul className='categoryHeader__list'>
        {categoryHeaderData.map((data: any, key: any) => (
          <CategoryHeaderItem key={`category-header-item-${key}`} Icon={<data.icon />} href={data.href} text={data.text} />
        ))}
        </ul> */}
    </div>
  );
};

export default CategoryHeader;