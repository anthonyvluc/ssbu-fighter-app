import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {PageEvent} from '@angular/material';

import { Fighter } from '../fighter';
import { FighterService } from '../fighter.service';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})
export class FightersComponent implements OnInit {

  fighters: Fighter[];
  displayedColumns = ['id', 'name'];

  // MatPaginator Inputs
  length = 100;
  pageIndex = 1;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private fighterService: FighterService) { }

  ngOnInit() {
    this.getFighters();
  }

  getFighters(): void {
    this.fighterService.getFighters()
      .subscribe(fighters => {
        this.fighters = fighters,
        this.length = fighters.length
      });
  }

}
