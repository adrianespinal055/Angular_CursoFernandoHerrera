
import { NgClass, NgForOf } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';

interface Character{
  id:number;
  name:string;
  poder:number;
}

@Component({
  templateUrl: './dragonball-page.component.html',


})

export class DragonBallComponent {
  name = signal('Gohan');
  poder = signal(100);


//arreglos
characters = signal<Character[]>([
  {id:1,name:'Goku',poder:9001},
  {id:1,name:'Gojan',poder:9001},
  {id:1,name:'Savier',poder:9001},
  {id:1,name:'Adrian',poder:9005},
  {id:1,name:'Gojan',poder:9006},
  {id:1,name:'Savier',poder:500},
]);



powerclases = computed(()=>{
  return{
    'text-danger':true,
  }
})
}
