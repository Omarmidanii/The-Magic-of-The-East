export default interface CustomError extends Error 
{
    response?: {
      status: number;
    };
};