
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonBallComponent } from './pages/dragonball/dragonball-page.component';

export const routes: Routes = [

{
path:'',
component: CounterPageComponent
},{
  path:'hero',
  component: HeroPageComponent
},{
  path:'dragonball',
  component:DragonBallComponent
},
{
  path:'**',
  redirectTo:''//Redireccionar el caso de escribir algo diferente a la rutas
}
];
