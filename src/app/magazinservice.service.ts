import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MagazinserviceService {

  apiUrl='http://localhost:8080/api/magasin/';
  constructor(private http: HttpClient) { }
  AfficheMagazin(){
    return this.http.get(this.apiUrl+"AllMagasin")
  }
  ajouteMagazin(data: any){
    return this.http.post(this.apiUrl+"AddMagasin", data);
  }
  deletemagazin(id:any){
    return this.http.delete(this.apiUrl+"OutaffMagasin/"+id);
  }
}
