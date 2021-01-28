import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourniseurRoutingModule } from './fourniseur-routing.module';
import { FourniseurComponent } from './fourniseur.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreatComponent } from './creat/creat.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ShowComponent } from './show/show.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import {DepenseModule} from '../depense/depense.module';


@NgModule({
  declarations: [FourniseurComponent, CreatComponent, ShowComponent, DetailsComponent],
  imports: [
    CommonModule,
    FourniseurRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    DepenseModule
  ], providers: [
    MatDatepickerModule,
  ],
})
export class FourniseurModule { }
