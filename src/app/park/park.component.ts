import { Component, OnInit } from '@angular/core';
import { ParkService } from '../park.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.scss']
})
export class ParkComponent implements OnInit {
  park:any;
  ajout:any;
  searchText:any;
  constructor(private parkService:ParkService) { }

  ngOnInit(): void {
    this.getPark();
  }
  getPark(){
    this.parkService.AffichePark().subscribe(data=>{
      console.log
      this.park=data
      console.log(this.park)

    })
  }

  onSubmit(form: NgForm){
    this.parkService.ajoutePark(form.value).subscribe(data=>{
      this.ajout=data
    })
}
}
