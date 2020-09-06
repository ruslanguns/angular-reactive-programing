import { Component } from '@angular/core';
import { CharacterService } from './character.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private characterService: CharacterService){}

  characters$ = this.characterService.characters$;
}
