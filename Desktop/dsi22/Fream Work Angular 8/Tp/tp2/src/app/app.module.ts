import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AboudaaComponent } from './aboudaa/aboudaa.component';
import { TableauComponent } from './tableau/tableau.component';
import { ExercicepersonneComponent } from './exercicepersonne/exercicepersonne.component';
import { Patie3Component } from './patie3/patie3.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Partie4Component } from './partie4/partie4.component';
import { from } from 'rxjs';
import { Exercice4Component } from './exercice4/exercice4.component';
import { Exercice5Component } from './exercice5/exercice5.component';

@NgModule({
  declarations: [
    AppComponent,
    AboudaaComponent,
    TableauComponent,
    ExercicepersonneComponent,
    Patie3Component,
    Exercice3Component,
    Partie4Component,
    Exercice4Component,
    Exercice5Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
