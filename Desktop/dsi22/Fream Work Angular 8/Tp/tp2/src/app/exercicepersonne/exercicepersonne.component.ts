import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicepersonne',
  templateUrl: './exercicepersonne.component.html',
  styleUrls: ['./exercicepersonne.component.css']
})
export class ExercicepersonneComponent implements OnInit {

  nom:string="POPEY";
  age=56;
  actif:boolean=true;
  

  constructor() { }

  ngOnInit() {
  }

}
