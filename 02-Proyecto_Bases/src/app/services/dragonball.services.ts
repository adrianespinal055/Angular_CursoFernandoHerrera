import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})

export class DragonballService {
//arreglos
characters = signal<Character[]>([
  {id:1,name:'Goku',poder:9001},
  {id:1,name:'Gojan',poder:9001},
]);


addCharacter(Personaje:Character) {
  this.characters.update(
    list => [...list, Personaje]
  )
}


}
