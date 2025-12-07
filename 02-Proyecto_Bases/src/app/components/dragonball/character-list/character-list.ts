import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type{Character} from '../../../interfaces/character.interface';
@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList {
characters  = input.required<Character[]>(); //Recibir una informacion desde el exterior como un parametro
listName= input.required<string>();


 }

