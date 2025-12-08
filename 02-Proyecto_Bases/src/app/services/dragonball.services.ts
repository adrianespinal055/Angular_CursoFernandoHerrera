import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';


const loadFromLocalStorage = (): Character[] =>{

  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters):[];



}

@Injectable({providedIn: 'root'})

export class DragonballService {
//arreglos
characters = signal<Character[]>(loadFromLocalStorage());


addCharacter(Personaje:Character) {
  this.characters.update(
    list => [...list, Personaje]
  )
}

//Efectos para poder disparar una accion secundaria
//Solo graba en el local storage
saveToLocalStorage= effect(()=>{
  //console.log(`Character count ${this.characters().length}`)
localStorage.setItem('character', JSON.stringify(this.characters()));
})


}
