import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboudaa',
  templateUrl: './aboudaa.component.html',
  styleUrls: ['./aboudaa.component.css']
})
export class AboudaaComponent implements OnInit {

nom="abd el alii";
age=21;
taille()
{
  this.nom="abd el alii";
  
  return this.nom.length;
}
infos()
{ return this.nom +" a pour âge " + this.age; }


actif:boolean=true;


  constructor() { }

  ngOnInit() {
  }

}
