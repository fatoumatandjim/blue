import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonServiceService } from '../mon-service.service';

@Component({
  selector: 'app-modifi-chauffeur',
  templateUrl: './modifi-chauffeur.component.html',
  styleUrls: ['./modifi-chauffeur.component.scss']
})
export class ModifiChauffeurComponent implements OnInit {
  id:any;
  modifi:any;
  constructor(private monservice:MonServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.monservice.detail(this.id).subscribe(data=>{
      console.log(data);
      this.modifi = data;

      
    })
    console.log(this.id);
  }
  onUpdate(){
    
    this.monservice.Update(this.modifi.id, this.modifi).subscribe(
      dataretour=>{
        console.log(dataretour);
       
        this.ngOnInit();
    }
  
 ) }
}
