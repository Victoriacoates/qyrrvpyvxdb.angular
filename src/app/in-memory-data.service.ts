import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Rule1' },
      { id: 12, name: 'Rule2' },
      { id: 13, name: 'Rule3' },
      { id: 14, name: 'Rule4' },
      { id: 15, name: 'Rule5' },
      { id: 16, name: 'Rule6' },
      { id: 17, name: 'Rule7' },
      { id: 18, name: 'Rule8' },
      { id: 19, name: 'Rule9' },
      { id: 20, name: 'Rule10' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/