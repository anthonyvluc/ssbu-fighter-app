import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Fighter }        from '../fighter';
import { FighterService } from '../fighter.service';

@Component({
  selector: 'app-fighter-detail',
  templateUrl: './fighter-detail.component.html',
  styleUrls: ['./fighter-detail.component.css']
})
export class FighterDetailComponent implements OnInit {

  fighter: Fighter;
  imagePath: string;

  constructor(
    private route: ActivatedRoute,
    private fighterService: FighterService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFighter();
  }

  getFighter(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fighterService.getFighter(id)
      .subscribe(fighter => {
        this.fighter = fighter
        this.imagePath = `assets/images/${this.fighter.name}`
            .replace(/\.+/g, '')
            .replace(/\s+/g, '-')
            .toLowerCase() + '.jpg'
      });
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.fighterService.updateFighter(this.fighter)
  //     .subscribe(() => this.goBack());
  // }
}
