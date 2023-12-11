import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field"
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from "@angular/material/table"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlsTableComponent } from './views/urls-table/urls-table.component';
import { AddUrlComponent } from './views/add-url/add-url.component';
import { DefaultLayoutComponent } from './container/default-layout/default-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlsTableComponent,
    AddUrlComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
