import { Component, OnInit } from '@angular/core';
import { Fighter } from '../fighter';
import { FighterService } from '../fighter.service';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})
export class FightersComponent implements OnInit {

  fighters: Fighter[];
  columnsToDisplay = ['id', 'name'];

  constructor(private fighterService: FighterService) { }

  ngOnInit() {
    this.getFighters();
  }

  getFighters(): void {
    this.fighterService.getFighters()
      .subscribe(fighters => this.fighters = fighters);
  }

}
