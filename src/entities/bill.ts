export default interface bill {
  id?: number;
  customer: string;
  date: string;
  total_net_price?: number;
  total_sell_price?: number;
  notes?: string;
  groups: BillItem[];
}

export interface BillItem {
  name: string;
  quantity: number;
  workshop: string;
}
