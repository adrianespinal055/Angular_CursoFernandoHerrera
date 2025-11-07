

import { Product, taxCalculation} from './06-function-destructuring'

const shoppingCar:Product[] =[
    {
        descripcion:'Nokia', 
        price:100
    },{
        descripcion:'Ipad',
        price:150
    }
] ;

//tax = 0.15

const [total,tax] = taxCalculation({
    products:shoppingCar,
    tax:0.15
});

console.log('Total',total);
console.log('Tax',tax);