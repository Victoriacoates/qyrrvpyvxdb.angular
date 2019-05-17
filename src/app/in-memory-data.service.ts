import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Processor – Machines have up to date National Sanitation Foundation Certification', description: 'example description', jsdefinition: 'default code test', assets: 'dfgdfg, dfgdfg, dfgdfg' },
      { id: 2, name: 'Distribution Center – Facility has up to date Hazard Analysis Critical Control Points Certification' },
      { id: 3, name: 'Retail Store – Facility has up to date Fumigation Certification' },
      { id: 4, name: 'Identity Counterfeit Packages' },
    
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