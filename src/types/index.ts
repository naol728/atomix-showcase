export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
}

export interface InitalState {
  products: Product[];
  cartItems: CartItem[];
}
export interface Actions {
  addtoCart: (product: Product) => void;
  removefromCart: (productId: number) => void;
  incCartItems: (cartId: number) => void;
  decCartItems: (cartId: number) => void;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
};
