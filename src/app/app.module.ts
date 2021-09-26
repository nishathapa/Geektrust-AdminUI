import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/Material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

// import {SelectionModel} from '@angular/cdk/collections';

import {MatFormFieldModule} from '@angular/material/form-field';

import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './data-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import { MatTable } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SelectionModel,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    NgMatSearchBarModule
    // MatTableDataSource
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
