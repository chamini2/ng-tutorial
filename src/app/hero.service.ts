import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHero(id: Number): Promise<Hero> {
    return this.getHeroes()
    .then((heroes) => heroes.find((h) => h.id === id));
  }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    // Simulte server latency with a 2 second delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.getHeroes());
      }, 800);
    });
  }
}
