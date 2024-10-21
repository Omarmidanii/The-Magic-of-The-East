export default interface indexResponse<T>
{
 data : T[];
 status : number;
 message : string;
 meta : meta;
};

interface meta
{
 per_page : string;
 count : string;
 current_page : string;
 path : string;
 from : string;
 to : string;
 prev : string;
 next : string;
};