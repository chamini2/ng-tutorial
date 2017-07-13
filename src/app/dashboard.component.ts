import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers: [
    HeroService
  ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  ngOnInit(): void {
    this.heroService.getHeroes()
    .then((heroes) => {
      this.heroes = heroes.slice(1, 5);
    });
  }
  constructor(private heroService: HeroService) { }
}
