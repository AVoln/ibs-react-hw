export interface ICard {
  id: string;
  name: string;
  description: string;
  like: boolean;
  picture: {
    path: string;
    alt: string;
  };
  price: {
    value: number;
    currency: string;
  };
}

export interface ICardInfo {
  id: string;
  name: string;
  description: string;
  info: string;
  details: string;
  picture: {
    path: string;
    alt: string;
  };
  like: boolean;
  price: IPrice;
}

export interface IPrice {
  value: number;
  currency: string;
}
