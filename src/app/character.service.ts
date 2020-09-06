import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharacter } from './interfaces/character.interface';
import { environment } from '../environments/environment';
import { delay } from 'rxjs/operators';

@Injectable()
export class CharacterService {

  characters$ = this.http.get<ICharacter[]>(environment.urlApi + 'characters')
    .pipe(
      delay(1000),
    );

  constructor(private http: HttpClient){}

}
