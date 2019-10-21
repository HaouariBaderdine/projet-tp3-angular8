import { Component, OnInit } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

x:number=0;
y:number=0;
text:string="";

onKeyUp(event:KeyboardEvent)
{
this.text=((<HTMLInputElement>event.target).value);
this.x=parseFloat(this.text);
return this.x;
}
//fonction carre  
   carre()
   {
     return (this.x*this.x);
   }
onKeyUpe(event:KeyboardEvent)
{
  this.text=((<HTMLInputElement>event.target).value);
  this.y=parseFloat(this.text);
  return this.y;
}   
//fonction somme 
/*somme()
{
  return (this.x+this.y);
}*/
somme:number=0;

onAffiche(val1,val2)
{
  this.somme=parseFloat(val1)+parseFloat(val2);
}




  constructor() { }

  ngOnInit() {
  }

}
