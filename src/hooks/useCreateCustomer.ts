import useCreate from './useCreate';
import customer from '../entities/customer';

const useCreateCustomer = () => {
    return useCreate<customer, FormData>('customers');

}

export default useCreateCustomer