import { Customers } from '../interfaces';
import { customers } from './customers';

export class CustomersService {
    private customers: Customers;

    constructor(customers: Customers) {
        this.customers = customers
    }

    getCustomers() {
        return this.customers;
    }
}
export const customersService = new CustomersService(customers);