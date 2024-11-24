export default interface employer {
  id?: number;
  firstname?: string;
  lastname? : string;
  phonenumber?: string;
  address?: string;
  position?: string;
  salary?: string;
  reward?: number;
};

export interface Employers {
  totalSalary: number;
  employer: employer[];
}
