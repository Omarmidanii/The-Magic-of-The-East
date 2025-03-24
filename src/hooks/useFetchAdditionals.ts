import additionals from "../entities/additionals";
import useFetchData from "./useFetchWithoutPaj";

const useFetchAdditionals = (id:number, date:string) => {
    return useFetchData<additionals>(`additionals/showdetails/${id}/${date}`);
}

export default useFetchAdditionals