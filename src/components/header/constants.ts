import { ReactComponent as CreditCard } from '../../assets/icons/CreditCard.svg';
import { ReactComponent as ShieldCheck } from '../../assets/icons/ShieldCheck.svg';
import { ReactComponent as Truck } from '../../assets/icons/Truck.svg';

const topHeaderTexts = [
  [
    {
      txt: 'Compra',
      color: 'gray'
    },
    {
      txt: '\u00A0100% segura',
      color: 'yellow'
    }
  ],
  [
    {
      txt: 'Frete grátis',
      color: 'yellow'
    },
    {
      txt: '\u00A0acima de R$ 200',
      color: 'gray'
    }
  ],
  [
    {
      txt: 'Parcele',
      color: 'gray'
    },
    {
      txt: '\u00A0suas compras',
      color: 'yellow'
    }
  ]
];

export const topHeaderData = [
  {
    textData: topHeaderTexts[0],
    icon: Truck
  },
  {
    textData: topHeaderTexts[1],
    icon: ShieldCheck
  },
  {
    textData: topHeaderTexts[2],
    icon: CreditCard
  }
];
