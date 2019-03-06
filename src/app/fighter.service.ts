import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Fighter } from './fighter';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FighterService {

  /* URL to web api */
  private apiUrl = 'https://ssbu-fighter-api.herokuapp.com/api';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
   ) { }

  /* GET fighters */
  getFighters(): Observable<Fighter[]> {
    // TODO: send the message _after_ fetching the heroes
    this.log('fetched fighters');
    return this.http.get<Fighter[]>(this.apiUrl);
  }

  getFighter(id: string): Observable<Fighter> {
    // TODO: send the message _after_ fetching the heroeś
    this.log(`fetched fighter id=${id}`);
    return this.http.get<Fighter>(this.apiUrl+'/'+id);
  }

  /* Log a FighterService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FighterService: ${message}`);
  }
}
