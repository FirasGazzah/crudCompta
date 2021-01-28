import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepenseComponent} from './depense/depense.component';
import {FourniseurComponent} from './fourniseur/fourniseur.component';
import {FactureComponent} from './facture/facture.component';

const routes: Routes = [
  { path: 'depense', component: DepenseComponent,
    loadChildren: () => import('./depense/depense.module').then(m => m.DepenseModule)},
  { path: 'fournisseur', component: FourniseurComponent,
    loadChildren: () => import('./fourniseur/fourniseur.module').then(m => m.FourniseurModule)},
  { path: 'facture', component: FactureComponent,
    loadChildren: () => import('./facture/facture.module').then(m => m.FactureModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
