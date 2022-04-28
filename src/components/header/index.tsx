import React from 'react';
import { ReactComponent as CreditCard } from '../../assets/icons/CreditCard.svg';
import { ReactComponent as ShieldCheck } from '../../assets/icons/ShieldCheck.svg';
import { ReactComponent as Truck } from '../../assets/icons/Truck.svg';
import '../../styles/components/topHeader.css';

type HeaderItemsProps = {
  Icon: React.ReactNode;
  text: typeof firstLi;
};

const HeaderItems = ({ Icon, text }: HeaderItemsProps) => {
  return (
    <li className="topHeader__item">
      {Icon}
      {text.map((currentText, key) => (
        <span className={`topHeader__item--${currentText.color}`} key={`top-header-span-${key}`}>
          {currentText.txt}
        </span>
      ))}
    </li>
  );
};

const firstLi = [
  {
    txt: 'Compra',
    color: 'gray'
  },
  {
    txt: '\u00A0100% segura',
    color: 'yellow'
  }
];

const secondLi = [
  {
    txt: 'Frete grátis',
    color: 'yellow'
  },
  {
    txt: '\u00A0acima de R$ 200',
    color: 'gray'
  }
];

const thirdLi = [
  {
    txt: 'Parcele',
    color: 'gray'
  },
  {
    txt: '\u00A0suas compras',
    color: 'yellow'
  }
];

const Header = () => {
  return (
    <div className="topHeaderContainer">
      <ul className="topHeader">
        <HeaderItems text={firstLi} Icon={<ShieldCheck className="topHeader__icon" />} />
        <HeaderItems text={secondLi} Icon={<Truck className="topHeader__icon" />} />
        <HeaderItems text={thirdLi} Icon={<CreditCard className="topHeader__icon" />} />
      </ul>
    </div>
  );
};

export default Header;
