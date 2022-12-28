export type CartItemType = {
    id: string;
    title: string;
    type: string;
    price: number;
    count: number;
    imageUrl: string;
  }
  
export interface ICartSliceState {
    totalPrice: number;
    items: CartItemType[];
  }