export default interface TRes<T> {
  status: number;
  data: T;
  message: string;
}
