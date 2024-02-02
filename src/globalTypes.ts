export interface ICard {
  id: string;
  name: string;
  description: string;
  like: boolean;
  picture: IPicture;
  price: IPrice;
}

export interface ICardInfo {
  id: string;
  name: string;
  description: string;
  info: string;
  details: string;
  picture: IPicture;
  like: boolean;
  price: IPrice;
}

export interface IPrice {
  value: number;
  currency: string;
}

export interface IPicture {
  path: string;
  alt: string;
}
