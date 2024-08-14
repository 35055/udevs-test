export type TProduct = {
  title: string;
  count: number;
  additionally: null | string[];
};

export type TCart = {
  id: number;
  time: string;
  price: number;
  status: string;
  payment: string;
  comments: null | string[];
  orderType: string;
  products: TProduct[];
};
