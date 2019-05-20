import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {MaterialModule} from './material-module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { AppRoutingModule, Routes }     from './app-routing.module';
import { MdTabsModule } from '@angular/material';

import { FooterComponent } from './extras/footer.component';



import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';

import { AnalysisComponent } from './analysis/analysis.component';
import { SummaryComponent } from './summary/summary.component';

import { RulesAnalysisComponent } from './rulesanalysis/rulesanalysis.component';



import { Wizard } from './wizard';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule, 
    HttpClientModule,

    

    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,

    MaterialModule,

    NgbModule.forRoot(),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [

RulesAnalysisComponent,

    FooterComponent,

    AnalysisComponent,
    SummaryComponent,


    Wizard,
    
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/