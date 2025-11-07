export interface Product{
    descripcion:string;
    price:number;
}
const phone:Product ={
    descripcion:'Nokia A1',
    price:150.0
}
const tablet:Product={
    descripcion:'Ipad Air', 
    price:250.0
}

interface TaxCalculationOptions{
    tax:number;
    products:Product[];
}

export function taxCalculation(options:TaxCalculationOptions):number[]{

        let total=0;
        options.products.forEach(product =>{
            total+= product.price;
        });
        return [total,total*options.tax];
}
const shoppingCar=[phone,tablet];
const tax=0.15;

const result = taxCalculation({
    products: shoppingCar, 
    tax:tax,
})


console.log('Total',result[0]);
console.log('Tax', result[1])



