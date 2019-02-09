import { Component, OnInit } from '@angular/core';
import { ClassementService } from 'src/app/services/classement.service';
import {Socket} from 'ng-socket-io'
@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  constructor(private classementService: ClassementService, private socket: Socket) {

   }
  classements: any;
  class_SSV:any;
  class_nonSSV:any;
  ngOnInit() {
    this.getGenralClassification()
    this.getClassificationbySSV()
    this.getClassificationbyNonSSV()
    this.socket.on('classement', (data) => {
      console.log('received general classification from socket');
      console.log(data);
      this.getClassementSocket(data);
    });

  }


  getGenralClassification() {
    this.classementService.getGeneralClassification()
      .subscribe((data) => {
        //console.log(data)
        this.classements = data
      })
  }

  getClassificationbySSV() {
    this.classementService.getGeneralClassification()
      .subscribe((data) => {
        this.classements = data
        const result = this.classements.filter(classement => classement.classgroup.toUpperCase() == 'SSV');
        this.class_SSV = result
      })
  }

  getClassificationbyNonSSV() {
    this.classementService.getGeneralClassification()
      .subscribe((data) => {
        this.classements = data
        const result = this.classements.filter(classement => classement.classgroup.toUpperCase() != 'SSV');
        this.class_nonSSV = result
        console.log(this.class_nonSSV.arc)
      })
  }

  getClassementSocket(cls){
    this.classements = cls;
    this.class_nonSSV = cls.filter(classement => classement.classgroup.toUpperCase() != 'SSV');
    this.class_SSV = cls.filter(classement => classement.classgroup.toUpperCase() == 'SSV');

  }


}
