import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ColiServiceService {
  apiUrl='http://localhost:8080/api/colis/';
  constructor(private http: HttpClient) { }
  Affichecoli(){
    return this.http.get(this.apiUrl+"AllColis")
  }
  ajoutecoli(data: any){
    return this.http.post(this.apiUrl+"AddColis", data);
  }
}
