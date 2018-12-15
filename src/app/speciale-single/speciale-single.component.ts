import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassementService } from 'src/app/services/classement.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-speciale-single',
  templateUrl: './speciale-single.component.html',
  styleUrls: ['./speciale-single.component.css']
})
export class SpecialeSingleComponent implements OnInit {

  constructor(private classementService: ClassementService, private router: ActivatedRoute) { }
  id_speciale:any;
  classements: any;
  class_SSV: any;
  class_nonSSV: any;
  ngOnInit() {
    this.id_speciale = this.router.snapshot.paramMap.get('id_speciale')
    this.getGenralClassification(this.id_speciale)
    this.getClassificationbySSV(this.id_speciale)
    this.getClassificationbyNonSSV(this.id_speciale)

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


}
