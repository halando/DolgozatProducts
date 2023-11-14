import { Component } from '@angular/core';
import { BasketService } from '../basket.service';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-megrendeles',
  templateUrl: './megrendeles.component.html',
  styleUrls: ['./megrendel.component.css']
})
export class MegrendelesComponent {
  tetelek:any
  eletronic:any
  constructor(private kosar:BasketService,
    private base:BaseService
    ){
    this.kosar.getKosarBehav().subscribe(
      (a)=>this.tetelek=a    
  )
    this.base.getProducts().subscribe(
      (a)=>this.eletronic=a
    )
  }

  keresEletronic(id:any){
    return this.eletronic.find(
      (n:any)=> n.id==id
    )
  }

  tetelTorlese(tetel:any){
    this.kosar.tetelTorlese(tetel)
  }

  osszErtek(){
    if (this.tetelek && this.eletronic){
      // for (const t of this.tetelek) {
      //   console.log(t)
      // }
      let sum=0
      this.tetelek.forEach((e:any) => {
        sum+= Number(this.keresEletronic(e.id).ar*e.db)
      });
      return sum
    }
    return null
  }

  valtozas(tetel:any){
    // console.log("Tétel", tetel)
    this.kosar.addTetel(tetel.id,tetel.db)
  }
  
}