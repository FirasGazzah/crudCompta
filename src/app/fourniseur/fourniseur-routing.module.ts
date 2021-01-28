import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatComponent} from './creat/creat.component';
import {ShowComponent} from './show/show.component';

const routes: Routes = [
  { path: '',      component: ShowComponent },
  { path: 'show',      component: ShowComponent },
  { path: 'add',      component: CreatComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourniseurRoutingModule { }
