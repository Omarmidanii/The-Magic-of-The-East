export default interface employer {
  id?: number;
  firstname?: string;
  lastname? : string;
  phone?: string;
  address?: string;
  position?: string;
  salary?: number;
  reward?: number;
};

export interface Employers {
  totalSalary: number;
  employer: employer[];
}
