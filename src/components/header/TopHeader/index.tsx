import React from 'react';
import '~/styles/components/topHeader.css';
import { topHeaderData } from './constants';

type HeaderItemsProps = {
  Icon: React.ReactNode;
  text: {
    txt: string;
    color: string;
  }[];
};

const TopHeaderItems = ({ Icon, text }: HeaderItemsProps) => {
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

const TopHeader = () => {
  return (
    <div className="topHeaderContainer">
      <ul className="topHeader">
        {topHeaderData.map((data, key) => (
          <TopHeaderItems
            key={`top-header-item-${key}`}
            text={data.textData}
            Icon={<data.icon className="topHeader__icon" />}
          />
        ))}
      </ul>
    </div>
  );
};

export default TopHeader;