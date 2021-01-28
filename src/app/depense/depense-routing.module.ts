import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatComponent} from './creat/creat.component';
import {ListComponent} from './list/list.component';
import {ShowCatComponent} from './cat/show-cat/show-cat.component';

const routes: Routes = [
  { path: '',      component: ListComponent },
  { path: 'show',      component: ListComponent },
  { path: 'add',      component: CreatComponent },
  { path: 'showcat',      component: ShowCatComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepenseRoutingModule { }
