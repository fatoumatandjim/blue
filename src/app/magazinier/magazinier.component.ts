import { Component, OnInit } from '@angular/core';
import { MagazinserviceService } from '../magazinservice.service';
import { MonServiceService } from '../mon-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-magazinier',
  templateUrl: './magazinier.component.html',
  styleUrls: ['./magazinier.component.scss']
})
export class MagazinierComponent implements OnInit {
  magazin:any;
  ajout:any;
  searchText:any;
  constructor(private magazinservice:MagazinserviceService) { }

  ngOnInit(): void {
    this.getMagazin();

  }
  getMagazin(){
    this.magazinservice.AfficheMagazin().subscribe(data=>{
      console.log
      this.magazin=data
      console.log(this.magazin)

    })
  }
  onSubmit(form: NgForm){
    this.magazinservice.ajouteMagazin(form.value).subscribe(data=>{
      this.ajout=data
    })
}

supprimer(id:any){
  this.magazinservice.deletemagazin(id).subscribe(() =>{
    alert("supprimer")
    this.ngOnInit()
  })
}

}
