import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: `./heroes.component.html`,
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  add(inputName: string): void {
    const name = inputName.trim();
    if (name) {
      this.heroService.create(name)
      .then((hero) => {
        this.heroes.unshift(hero);
        this.selectedHero = hero;
      });
    }
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
    .then(() => {
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
      this.heroes = this.heroes.filter((h) => h !== hero);
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['detail', this.selectedHero.id], {
      relativeTo: this.route
    });
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly()
    .then((heroes) => {
      this.heroes = heroes;
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(
    private heroService: HeroService,
    private router: Router, private route: ActivatedRoute
  ) { }
}
