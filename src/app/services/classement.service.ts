import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ng-socket-io';
import { environment } from 'src/environments/environment';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ClassementService {

  constructor(private http: HttpClient, private socket: Socket) { }

  getGeneralClassification() {
    console.log(API_URL)
    this.socket.emit("new message", 'msg');
    this.socket.on("speciale1", (data) => {
      console.log('data')
      console.log(data)
    });
    return this.http.get(API_URL + '/classement');
  }

  getAllSpeciales(){
    return this.http.get(API_URL + '/speciales');
  }

  getSpecialeById(id_speciale){
    return this.http.get(API_URL + '/temps/speciale/'+id_speciale);
  }

  getSpecialeId(id_speciale){
    return this.http.get(API_URL + '/speciale/'+id_speciale);
  }

}
