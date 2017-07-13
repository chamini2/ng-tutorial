import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';
import { HeroSearchService } from './hero-search.service';

@Component({
  selector: 'hero-search',
  templateUrl: `./hero-search.component.html`,
  styleUrls: [ './hero-search.component.css' ],
  providers: [ HeroSearchService ]
})
export class SearchComponent implements OnInit {
  private heroes: Observable<Hero[]>;

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroes = this.heroSearchService.search('');
  }

  search(term: string): void {
    this.heroes = this.heroSearchService.search(term);
  }

  gotoDetail(hero: Hero): void {
    this.router.navigate(['/heroes', 'detail', hero.id]);
  }
}
