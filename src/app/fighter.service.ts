import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Fighter } from './fighter';
import { FIGHTERS } from './fighters-list';

@Injectable({
  providedIn: 'root'
})
export class FighterService {

  constructor() { }

  getFighters(): Observable<Fighter[]> {
    return of(FIGHTERS);
  }
}
