import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepenseRoutingModule } from './depense-routing.module';
import { ListComponent } from './list/list.component';
import { CreatComponent } from './creat/creat.component';
import { DepenseComponent } from './depense.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CategoriComponent } from './cat/categori/categori.component';
import { SubcategoriComponent } from './cat/subcategori/subcategori.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import { ShowCatComponent } from './cat/show-cat/show-cat.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  declarations: [ListComponent, CreatComponent, DepenseComponent, DepartmentComponent, CategoriComponent, SubcategoriComponent, ShowCatComponent],
  imports: [
    CommonModule,
    DepenseRoutingModule,
    MatToolbarModule,
    SharedModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRadioModule,
    DragDropModule,
    MatExpansionModule,
    CdkTreeModule,
    MatTreeModule
  ],
  providers: [
    MatDatepickerModule,
  ],
  exports: [
    ListComponent
  ],
  entryComponents: [DepartmentComponent, CategoriComponent, SubcategoriComponent]
})
export class DepenseModule { }
