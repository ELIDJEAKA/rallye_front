import { Component, OnInit } from '@angular/core';
import { ClassementService } from 'src/app/services/classement.service';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  constructor(private classementService: ClassementService) { }
  classements: any;
  class_SSV:any;
  class_nonSSV:any;
  ngOnInit() {
    this.getGenralClassification()
    this.getClassificationbySSV()
    this.getClassificationbyNonSSV()

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

  
}
