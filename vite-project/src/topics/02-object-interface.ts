//Hablar sobre los objetos que tiene js 


//crear un arreglo con solo definir los valores se establece el valor de los valores 
let skills: string[]  = ['Bash', 'Counter','Healing'];


interface Character{
    name:string;
    hp:number;
    skills:string[];
    hometown?:string;  //con el signo de interrogacion es opcional 

}
//Si el valor del objeto no cambia debemos utilizar las constantes
const strider:Character ={
    name: 'strider',
    hp: 100,
    skills: ['Bash', 'Counter'],

}

strider.hometown='Rivendel';


console.table(strider);

export{};//transformamos el archivo en un modulo 