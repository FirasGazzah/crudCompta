import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowallComponent} from './showall/showall.component';
import {ShowfactureComponent} from './showfacture/showfacture.component';

const routes: Routes = [
  { path: '',      component: ShowallComponent },
  { path: 'showall',      component: ShowallComponent },
  { path: 'facturelist',      component: ShowfactureComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
