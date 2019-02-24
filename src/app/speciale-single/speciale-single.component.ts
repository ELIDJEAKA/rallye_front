import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassementService } from 'src/app/services/classement.service';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ng-socket-io'
@Component({
  selector: 'app-speciale-single',
  templateUrl: './speciale-single.component.html',
  styleUrls: ['./speciale-single.component.css']
})
export class SpecialeSingleComponent implements OnInit {

  constructor(private classementService: ClassementService, private router: ActivatedRoute, private socket:Socket) { }
  id_speciale:any;
  classements: any;
  class_SSV: any;
  class_ARC: any;
  tab_ARC = [];
  test_ARC = [];
  tab_non_ARC = [];
  class_nonSSV: any;
  speciale:any;
  ngOnInit() {
    this.id_speciale = this.router.snapshot.paramMap.get('id_speciale')
    this.getGenralClassification(this.id_speciale)
    this.getClassificationbySSV(this.id_speciale)
    this.getClassificationbyNonSSV(this.id_speciale)
    this.getClassementARC(this.id_speciale)
    this.getSpecialeId(this.id_speciale)
    this.socket.on('speciale'+ this.id_speciale, (data) => {
      this.getClassementSocket(data);
      this.getClassementARC(this.id_speciale);
    });
  }


  getSpecialeId(id_speciale) {
    this.classementService.getSpecialeId(id_speciale)
      .subscribe((data) => {
        this.speciale = data
      })
  }

  getGenralClassification(id_speciale) {
    this.classementService.getSpecialeById(id_speciale)
      .subscribe((data) => {
        this.classements = data
      })
  }

  getClassificationbySSV(id_speciale) {
    this.classementService.getSpecialeById(id_speciale)
      .subscribe((data) => {
        this.classements = data
        console.log(data)
        const result = this.classements.filter(classement => classement.pilote.classgroup.toUpperCase() == 'SSV');
        this.class_SSV = result
      })
  }

  getClassificationbyNonSSV(id_speciale) {
    this.classementService.getSpecialeById(id_speciale)
      .subscribe((data) => {
        this.classements = data
        const result = this.classements.filter(classement => classement.pilote.classgroup.toUpperCase() != 'SSV');
        this.class_nonSSV = result
        console.log(this.class_nonSSV.arc)
      })
  }

  getClassementSocket(cls){
    this.classements = cls;
    this.class_nonSSV = cls.filter(classement => classement.pilote.classgroup.toUpperCase() != 'SSV');
    this.class_SSV = cls.filter(classement => classement.pilote.classgroup.toUpperCase() == 'SSV');
  }

  getClassementARC(id_speciale) {
    this.classementService.getSpecialeById(id_speciale)
      .subscribe((data) => {
        let tab_id_arc = [1, 7, 4, 3, 2]
        this.classements = data
        this.class_ARC = this.classements.filter(classement => classement.pilote.classgroup.toUpperCase() != 'SSV');
        this.tab_ARC = []
        this.tab_non_ARC = []
        const result = this.class_ARC.filter((el) => {
          
          if (tab_id_arc.includes(el.pilote.id) == true && this.tab_ARC.includes(el.pilote.id) == false) {
            
            this.tab_ARC.push(el)
          } else if (tab_id_arc.includes(el.pilote.id) == false && this.tab_ARC.includes(el.pilote.id) == false) {
            this.tab_non_ARC.push(el)
            
          }
        })
      })
  }


}
