interface AudioPlayer{
    audioVolume:number; 
    songDuration:number;
    song:string; 
    detail:Details;
}
interface Details {
    author:string;
    year:number;
}

const audioPlayer:AudioPlayer ={
    audioVolume:90,
    songDuration:36,
    song:"Mess", 
    detail:{
        author:'Ed Sheeran', 
        year:2015
    }

}
//Des estructuracion
//const { song:anotherSong,songDuration:Duration } = audioPlayer;

//const {author:AutorEspañol} = audioPlayer.detail;


//console.log (anotherSong);
//console.log(Duration);
//console.log(AutorEspañol);


//Desestructuracion de Arreglos 
//const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];
const[,,p3] :string [] = ['Goku', 'Vegeta', 'Trunks']

console.log('Personaje 3: de Dragon Ball Z ', p3|| 'Personaje no encontrado');