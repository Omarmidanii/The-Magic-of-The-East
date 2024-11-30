export default interface Group {
  id?: number;
  name: string;
  classification_id?: number;
  description: string;
  photos: { id: number; path: string }[];
  colors: number[];
  items: { name: string; sizes: Record<string, number> }[];
}
