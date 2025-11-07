export class Person{
    public name:string;
    public addres:string;

    constructor(name:string,address:string){
        this.name= name;
        this.addres=address;
    }

}

export class Hero extends Person{
    constructor(
        public alterHero:string, 
        public age:number,
        public realName:string,
        public person:Person,

    ){
        super(realName,'NewYork');
    }
}

const tony = new Person('Tony Stark','New York');

const Heroe = new Hero ('Saeida Checo', 45.5,'Tony',tony );

const iroman = new Person('Adrian Espinal','Santiago de los Caballeros');

console.log(iroman);
console.log(Heroe);

