import {Customer} from './customer';

export class App {
    constructor() {
        this.heading = 'Customer Manager';
        this.customers = this.getCustomersFromStorage();

        this.customerName = '';
        this.customerEmail = '';
        this.customerPhone = '';
    }

    getCustomersFromStorage() {
        let customers;
        if (localStorage.getItem('customers') === null) {
            customers = [];
        } else {
            customers = JSON.parse(localStorage.getItem('customers'));
        }

        return customers;
    }

    addCustomer() {
        if (this.customerName && this.customerEmail && this.customerPhone) {
            this.customers.push(new Customer(this.customerName, this.customerEmail, this.customerPhone));

            // Store in local storage
            this.storeCustomer(this.customerName, this.customerEmail, this.customerPhone);

            // Clear Fields
            this.customerName = '';
            this.customerEmail = '';
            this.customerPhone = '';
        }
    }

    storeCustomer(name, email, phone) {
        let customers;
        if (localStorage.getItem('customers') === null) {
            customers = [];
        } else {
            //local storage can only handle strings, not objects so we parse then in JSON.parse
            customers = JSON.parse(localStorage.getItem('customers'));
        }

        customers.push({name: name, email: email, phone: phone});
        //stringify when we set things so we can store the strings locally
        localStorage.setItem('customers', JSON.stringify(customers));
    }

    removeCustomer(customer) {
        let index = this.customers.indexOf(customer);
        if (index !== -1) {
            //The splice() method adds/removes items to/from an array, and returns the removed item(s).
            this.customers.splice(index, 1);
        }
        this.removeCustomerFromStorage(index);
    }

    removeCustomerFromStorage(index) {
        let customers = JSON.parse(localStorage.getItem('customers'));

        customers.splice(index, 1);

        localStorage.setItem('customers', JSON.stringify(customers));
    }
}