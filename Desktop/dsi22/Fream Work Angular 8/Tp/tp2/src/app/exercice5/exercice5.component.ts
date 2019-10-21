import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice5',
  templateUrl: './exercice5.component.html',
  styleUrls: ['./exercice5.component.css']
})
export class Exercice5Component implements OnInit {

  //declaration de tableau
  tab=[
    {nom:'popeye',image:'../assets/popeye.jpg',nb:16,parti:true},
    {nom:'samma',image:'../assets/smile.png',nb:14,parti:false},
    {nom:'dunald',image:'../assets/donald.jpg',nb:16,parti:false}
  ];
  nb:number=0;
  onAffiche(val: boolean)
  {
    if(val==true){this.nb=this.nb+1;}
  }
  
  constructor() { }

  ngOnInit() {
  }

}
