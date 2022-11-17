import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  apiUrl='http://localhost:8080/api/users/';
  constructor(private http: HttpClient) { }




  AfficheChauffeur(){
    return this.http.get(this.apiUrl+"AllUser")
  }
  ajoute(data: any){
    return this.http.post(this.apiUrl+"AddUser", data);
  }
  delete(id:any){
    return this.http.delete(this.apiUrl+"DeleteUser/"+id);
  }
    
  Update(id :number,data:any){
    return this.http.put(this.apiUrl +"UpdateUser/"+id,data);
  }
  
  detail(id:any){
    return this.http.get(this.apiUrl+"UserById/"+id);
  }


  //magazin
  AfficheMagazin(){
    return this.http.get(this.apiUrl+"AllMagasin")
  }

}
