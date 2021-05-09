import { Component, OnInit } from '@angular/core';
import { ClassementService } from 'src/app/services/classement.service';
import {Socket} from 'ng-socket-io'

import { MenuItem } from 'primeng/api';
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
  class_ARC:any;
  tab_ARC=[];
  test_ARC=[];
  tab_non_ARC=[];
  class_nonSSV:any;
  items: MenuItem[];
  activeIndex: number = 0;
  ngOnInit() {
    this.getGenralClassification()
    this.getClassificationbySSV()
    this.getClassificationbyNonSSV()
    this.getClassementARC()
    this.socket.on('classement', (data) => {
      console.log('received general classification from socket');
      console.log(data);
      this.getClassementSocket(data);
      this.getClassementARC()
    });

    
  }


  getGenralClassification() {
    console.log("test");
    
    this.classementService.getGeneralClassification()
      .subscribe((data) => {
        console.log(data)
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
      })
  }

  getClassementSocket(cls){
    this.classements = cls;
    this.class_nonSSV = cls.filter(classement => classement.classgroup.toUpperCase() != 'SSV');
    this.class_SSV = cls.filter(classement => classement.classgroup.toUpperCase() == 'SSV');
    
  }

  getClassementARC(){
    this.classementService.getGeneralClassification()
      .subscribe((data) => { 
        let tab_id_arc=[1,7,4,3,2]
        this.classements = data
        this.class_ARC = this.classements.filter(classement => classement.classgroup.toUpperCase() != 'SSV');
        this.tab_ARC = []
        this.tab_non_ARC = []
        const result = this.class_ARC.filter((el)=>{
          if (tab_id_arc.includes(el.id)==true && this.tab_ARC.includes(el.id)==false){
            //console.log('output ', this.tab_ARC.includes(el.id))
            this.tab_ARC.push(el) 
          } else if (tab_id_arc.includes(el.id) == false && this.tab_ARC.includes(el.id)==false){
            this.tab_non_ARC.push(el)
            //console.log('this.tab_non_ARC ',this.tab_non_ARC)
          }
        })
      })  
  }


}
