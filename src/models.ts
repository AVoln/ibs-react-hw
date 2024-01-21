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
