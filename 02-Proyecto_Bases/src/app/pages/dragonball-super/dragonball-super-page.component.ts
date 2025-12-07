

import { Component, OnInit, signal } from '@angular/core';

interface Character{
  id:number;
  name:string;
  poder:number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector:'dragonball-super'
})

export class DragonBallSuperComponent {

  name = signal('');
  poder = signal(0);


//arreglos
characters = signal<Character[]>([
  {id:1,name:'Goku',poder:9001},
  {id:1,name:'Gojan',poder:9001},
]);


addCharacter() {
  if(!this.name() || !this.poder() || this.poder() < 0)
  {
    return;
  }

  const newPersonaje:Character = {
    id:this.characters().length +1,
    name:this.name(),
    poder:this.poder(),
  };

 // this.characters().push(newPersonaje);
  this.characters.update(
  (list)=>[...list,newPersonaje])

  this.resetFields();
}

resetFields(){
  this.name.set('');
  this.poder.set(0);
}

}
