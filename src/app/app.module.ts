import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './depense/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from './shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {GoogleChartsModule} from 'angular-google-charts';
const routes: Routes = [
  { path: '', component: ListComponent},
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    SharedModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    GoogleChartsModule
  ],
  providers: [HttpClient, HttpClientModule],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
