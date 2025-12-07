

import { Component, inject, OnInit, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { DragonballCharacterAdd } from "../../components/dragonball/dragonball-character-add/dragonball-character-add";
import { DragonballService } from '../../services/dragonball.services';

interface Character{
  id:number;
  name:string;
  poder:number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector:'dragonball-super',
  imports: [CharacterList, DragonballCharacterAdd],
})

export class DragonBallSuperComponent {
 constructor(
  public dragonballService: DragonballService

)
{

}
public dragonballService1 = inject(DragonballService)


addCharacter(){
  this.dragonballService.addCharacter
}

}
