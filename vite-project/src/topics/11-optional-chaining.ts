export interface Passenger{
    name:string;
    children?:string[];
}

const passenger1:Passenger = {
    name:'Adrian Espinal',
}
const passenger2:Passenger={
    name:'Fernando herrera',
    children:['Nathalia', 'Elizabeth']

}

const printChildren=(passenger:Passenger)=>{
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2);
printChildren(passenger1);