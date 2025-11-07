
export function whatsMyType<T>(argument:T):T
{
    return argument;
}

let amIString:string = whatsMyType<string>('Hola Mundo'); 
let amINumber:number= whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split('' ));
