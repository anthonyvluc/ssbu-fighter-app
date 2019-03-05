import { Component, OnInit } from '@angular/core';
import { Fighter } from '../fighter';
import { FighterService } from '../fighter.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fighters: Fighter[] = [];

  constructor(private fighterService: FighterService) { }

  ngOnInit() {
    this.getFighters();
  }

  getFighters(): void {
    this.fighterService.getFighters()
      .subscribe(fighters => this.fighters = fighters.slice(0, 5));
  }

}
