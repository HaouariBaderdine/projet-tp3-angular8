import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {

  x:number;
  y:number;
  res:number;
  onAffiche(val1,val2)
  {
    this.res=(val1*val2);
  }
  constructor() { }

  ngOnInit() {
  }

}
