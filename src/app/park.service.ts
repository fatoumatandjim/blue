import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ParkService {
  apiUrl='http://localhost:8080/api/parc/';
  constructor(private http: HttpClient) { }


  AffichePark(){
    return this.http.get(this.apiUrl+"AllParc")
  }

  ajoutePark(data: any){
    return this.http.post(this.apiUrl+"AddParc", data);
  }
}
