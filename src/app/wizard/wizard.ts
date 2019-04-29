import { Component, HostBinding, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { trigger, transition, animate, style, query, stagger } from '@angular/animations';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material-module';

import {CdkCustomStepperWithoutFormExample, CustomStepper} from './app/cdk-custom-stepper-without-form-example';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [CdkCustomStepperWithoutFormExample, CustomStepper],
  declarations: [CdkCustomStepperWithoutFormExample, CustomStepper],
  bootstrap: [CdkCustomStepperWithoutFormExample],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

