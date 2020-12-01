import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactformComponent } from './reactform/reactform.component';

@NgModule({
declarations:   [ AppComponent,ReactformComponent],
imports:        [ BrowserModule,AppRoutingModule,ReactiveFormsModule],
providers:      [],
bootstrap:      [AppComponent]

})
export class AppModule { }
