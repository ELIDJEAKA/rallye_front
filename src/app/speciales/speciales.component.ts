import { Component, OnInit } from '@angular/core';
import { ClassementService } from 'src/app/services/classement.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-speciales',
  templateUrl: './speciales.component.html',
  styleUrls: ['./speciales.component.css']
})
export class SpecialesComponent implements OnInit {

  constructor(private classementService: ClassementService, private router: Router) { }
  speciales :any;
  term:any;
  ngOnInit() {
    this.getAllSpeciales()
  }


  getAllSpeciales(){
    this.classementService.getAllSpeciales()
    .subscribe((data)=>{
        console.log(data)
        this.speciales=data;
    })
  }

  onSelect(speciale) {
    console.log(speciale)
    this.router.navigate(['/classement-speciale', speciale.id])
  }


}
