export default interface Group {
  name: string;
  discription: string;
  images: string[];
  colors: string[];
  items: { name: string; sizes: Record<string, number> }[];
}
