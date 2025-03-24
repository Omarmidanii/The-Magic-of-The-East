export default interface additionals {
  total: number;
  total_rewards: string;
  total_deductions: number;
  details: {
    date:string;
    id: number;
    type: string;
    amount: number;
  }[];
}
