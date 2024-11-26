import useCreate from './useCreate';
import customer from '../entities/customer';

const useCreateCustomer = () => {
    return useCreate<customer, customer>('customers');

}

export default useCreateCustomer