import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

/* 
Promises:
- better way to handle asynchronous operations in JavaScript
- similar to done() callback in Jasmine tests
- let us wait for some code to finish before going to next step
- have three states: pending, fulfilled, rejected
- allows separate thread of execution for async code
*/


// resolve is a function similar to done() in Jasmine, lets us control when to go to next step

Promise.all([
    new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('value1');
    });
}),
new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })
]).then((values)=>{
    console.log(values); // ['value1', undefined]
    renderOrderSummary();
    renderPaymentSummary();
});

// single promise example
/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('value1');
    });
}).then((value) => {
    console.log(value);
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/



// callbacks causes "callback hell", hard to read and maintain code
/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/