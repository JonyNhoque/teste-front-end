import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MagnifyingGlass } from '~/assets/icons/MagnifyingGlass.svg';
import { ReactComponent as Logo } from '~/assets/images/Logo.svg';
import '~/src/styles/components/mainHeader.css';
import { mainHeaderData } from './contants';

type MainHeaderItemProps = {
  Icon: React.ReactNode;
  href: string;
};

const MainHeaderItem = ({ Icon, href }: MainHeaderItemProps) => {
  return (
    <li className="mainHeader__icon">
      <NavLink to={href}>{Icon}</NavLink>
    </li>
  );
};

const SearchBox = () => {
  return (
    <div className="mainHeader__searchBar">
      <input type="text" placeholder="O que você está buscando?" className="mainHeader__input" />
      <MagnifyingGlass className="mainHeader__magnifyingGlass" />
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className="mainHeader">
      <div className="mainHeader__logo">
        <Logo />
      </div>
      <SearchBox />
      <ul className="mainHeader__icons">
        {mainHeaderData.map((item, key) => (
          <MainHeaderItem key={`main-header-item-${key}`} Icon={<item.icon />} href={item.href} />
        ))}
      </ul>
    </div>
  );
};

export default MainHeader;
