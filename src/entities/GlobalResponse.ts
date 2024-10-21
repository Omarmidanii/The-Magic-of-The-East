export default interface GlobalResponse<T>
{
    data : T;
    message : string;
    status : number;
};