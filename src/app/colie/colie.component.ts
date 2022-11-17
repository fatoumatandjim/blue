import { Component, OnInit } from '@angular/core';
import { ColiServiceService } from '../coli-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-colie',
  templateUrl: './colie.component.html',
  styleUrls: ['./colie.component.scss']
})
export class ColieComponent implements OnInit {
  coli:any;
  ajout:any;
  searchText:any;
  constructor(private coliservice:ColiServiceService) { }

  ngOnInit(): void {
    this.getMagazin();
  }
  getMagazin(){
    this.coliservice.Affichecoli().subscribe(data=>{
      console.log
      this.coli=data
      console.log(this.coli)

    })
  }
  onSubmit(form: NgForm){
    this.coliservice.ajoutecoli(form.value).subscribe(data=>{
      this.ajout=data
    })
}
}
