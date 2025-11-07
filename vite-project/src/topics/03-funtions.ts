
//funciones 
function addNumber(a:number, b:number)
{
//toda funcion retonar undefined ose que no retorna nada
    return a+b;
}
//lamda function
const addNumbersArrow = (a:number, b:number):string=>{
    return `${a +b}`;
}

function multiply(firstNumber:number,secondNumber?:number,base:number=2){
    return  firstNumber*base;
}


const result:string = addNumber(1,2).toString(); 
const result2:string = addNumbersArrow(1,2); 
const multiplyResult:number = multiply(5);

//console.log({result})
//console.log({result2})
//console.log({result,result2,multiplyResult})
interface Character{
    name:String;
    hp:number;
    showHp:()=>void;
}

const healCharacter = (character:Character,amount:number)=>{

    character.hp += amount;
}

const strider:Character ={
    name:'Strider',
    hp:150, 
    showHp(){
        console.log(`Puntos de vida acumulados : ${this.hp}`);
    }
}

strider.showHp();
export{};