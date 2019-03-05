import { Component, OnInit } from '@angular/core';
import { Fighter } from '../fighter';
import { FIGHTERS } from '../fighters-list';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})
export class FightersComponent implements OnInit {

  fighters = FIGHTERS;
  selectedFighter: Fighter;

  constructor() { }

  ngOnInit() {
  }

  onSelect(fighter: Fighter): void {
    this.selectedFighter = fighter;
  }

}
