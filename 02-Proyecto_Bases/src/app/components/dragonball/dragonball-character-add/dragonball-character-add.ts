import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html',
})
export class DragonballCharacterAdd {

name = signal('');
poder = signal(0);
newCharacter = output<Character>() //componente que emite algo salida
addCharacter() {
  if(!this.name() || !this.poder() || this.poder() < 0)
  {
    return;
  }

  const newPersonaje:Character = {
    id: Math.floor(Math.random() * 1000),
    name:this.name(),
    poder:this.poder(),
  };

 // this.characters().push(newPersonaje);
  //this.characters.update(
  //(list)=>[...list,newPersonaje])

  this.newCharacter.emit(newPersonaje)

  this.resetFields();
}

resetFields(){
  this.name.set('');
  this.poder.set(0);
}




}
