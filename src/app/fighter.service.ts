import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Fighter } from './fighter';
import { FIGHTERS } from './fighters-list';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FighterService {

  constructor(private messageService: MessageService) { }

  getFighters(): Observable<Fighter[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('FighterService: fetched fighters');
    return of(FIGHTERS);
  }
}
