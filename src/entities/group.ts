export default interface Group {
  id?: number;
  name: string;
  classification_id?: number;
  description: string;
  images: string[];
  colors: number[];
  items: { name: string; sizes: Record<string, number> }[];
}
