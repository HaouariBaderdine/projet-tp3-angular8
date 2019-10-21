import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patie3',
  templateUrl: './patie3.component.html',
  styleUrls: ['./patie3.component.css']
})
export class Patie3Component implements OnInit {

contenu:string="";
 //
  onAfficher()
{
console.log(this.contenu);
}

onKeyUp(event:KeyboardEvent)
{
this.contenu = 'Bonjour '+(<HTMLInputElement>event.target).value;

}
onAfficherContenu(val:string)
{
console.log(val); }

  constructor() { }

  ngOnInit() {
  }

}
