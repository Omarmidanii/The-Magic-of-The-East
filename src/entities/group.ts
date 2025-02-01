import Item from "./Item";

export default interface Group {
  id?: number;
  name: string;
  state:string;
  net_price:string;
  classification_id?: number;
  description: string;
  photos: { id: number; path: string }[];
  colors: string[];
  items: Item[];
}
