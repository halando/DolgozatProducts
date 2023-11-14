import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class PlantsComponent {
  products:any
  showError=false
  errorMessage=""

  oszlopok=[
    {key:"ar",text:"Ár", type:"number"},
    {key:"kepUrl",text:"Kép", type:"image"},
    {key:"leiras",text:"Leírás", type:"textarea"},
    {key:"megnevezes",text:"Név", type:"text"},
  ]


  constructor(
    private base:BaseService, 
    private kosar:BasketService
    ){
    this.base.getProducts().subscribe({
      next: (adatok)=>{this.showError=false; this.products=adatok},
      error: (e)=> {this.showError=true; this.errorMessage=e.message
      }
     } )

  }

  kosarba(id:any,db:any){
    this.kosar.addTetel(id,db)
  }

}