import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
tab=[41,23,18,50];
nom="Operation de tableau";

min()
{
  var mini=this.tab[0];
  for(let i=1;i<4;i++) ///for(let a of tab)
  {
    if (this.tab[i]<mini) 
      mini=this.tab[i];
  }
  return mini;
}
moy()
{
  var moy=this.tab[0];
  for(let i=1;i<4;i++) ///for(let a of tab)
  {
    
      moy=moy+this.tab[i];
  }
  moy=moy/4;
  return moy;
}
taille()
{
  
  return this.nom.length;
}
  constructor() { }
  
  ngOnInit() {
  }

}
