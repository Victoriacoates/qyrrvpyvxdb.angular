import { Component, HostBinding, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

@Component({
  selector: 'rules-analysis',
  templateUrl: './rules-analysis.html',
    styleUrls: ['./rules-analysis.css'],
})

export class RulesAnalysis {}