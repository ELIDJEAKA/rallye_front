import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ClassementService {

  constructor(private http: HttpClient) { }

  getGeneralClassification() {
    console.log(API_URL)
    return this.http.get(API_URL + '/classement');
  }

  getAllSpeciales(){
    return this.http.get(API_URL + '/speciales');
  }

  getSpecialeById(id_speciale){
    return this.http.get(API_URL + '/temps/speciale/'+id_speciale);
  }

}
