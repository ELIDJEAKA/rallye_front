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
  ramdom:number;
  tab_images = [
    
    "/assets/images/SSV/ssv1.jpeg",
    "/assets/images/SSV/ssv2.jpeg",
    "/assets/images/SSV/ssv4.jpeg",
    "/assets/images/SSV/ssv5.jpeg",
    "/assets/images/SSV/ssv6.jpeg",
    "/assets/images/SSV/ssv7.jpeg",
  ]
  ngOnInit() {
    this.getAllSpeciales()
 
    console.log("random", this.ramdom)
  }

  

  getAllSpeciales(){
    this.classementService.getAllSpeciales()
    .subscribe((data)=>{
        console.log(data)
        //data.for
        this.speciales=data;

    })
  }

  onSelect(speciale) {
    console.log(speciale)
    this.router.navigate(['/classement-speciale', speciale.id])
  }


}
