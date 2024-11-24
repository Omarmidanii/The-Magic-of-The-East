export default interface User {
  id?: number;
  firstname?: string;
  lasname?: string;
  address?: string;
  phonenumbers?: string[];
  mobilenumbers?: string[];
  socialaccounts?: string[];
  access_token?: string;
  email: string;
  password: string;
}
