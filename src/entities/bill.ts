export default interface bill {
  id?: number;
  customerName: string;
  date: string;
  total_net_price?: number;
  total_sell_price?: number;
  notes?: Text;
}
