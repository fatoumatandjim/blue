import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../mon-service.service';
import { NgForm } from '@angular/forms';
import { MagazinserviceService } from '../magazinservice.service';
@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.scss']
})
export class ChauffeurComponent implements OnInit {
  chauffeur:any;
  ajout:any;
  magazin:any;
  searchText:any;
  constructor(private monservice:MonServiceService,private magazinservice:MagazinserviceService) { }

  ngOnInit(): void {
    this.getChauffeur();
  }
  getChauffeur(){
    this.monservice.AfficheChauffeur().subscribe(data=>{
      console.log
      this.chauffeur=data
      console.log(this.chauffeur)

    })
  }
  getMagazin(){
    this.magazinservice.AfficheMagazin().subscribe(data=>{
      console.log
      this.magazin=data
      console.log(this.magazin)

    })
  }
  onSubmit(form: NgForm){
    this.monservice.ajoute(form.value).subscribe(data=>{
      this.ajout=data
    })
}


supprimer(id:any){
  this.monservice.delete(id).subscribe(() =>{
    alert("supprimer")
    this.ngOnInit()
  })
}

}
