import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"; // Import 

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './core/components/Dashboard/dashboard.component';
import { componentesModule } from './shared/modules/components.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    componentesModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
