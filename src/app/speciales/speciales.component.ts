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
    
    "/assets/images/WRC/1.jpg",
    "/assets/images/WRC/2.jpg",
    "/assets/images/WRC/3.jpg",
    "/assets/images/WRC/4.jpg",
    "/assets/images/WRC/5.jpg",
    "/assets/images/WRC/6.jpeg",
    "/assets/images/WRC/7.jpeg",
    "/assets/images/WRC/8.jpeg",
    "/assets/images/WRC/9.jpeg",
    "/assets/images/WRC/10.jpeg",
    "/assets/images/WRC/11.jpeg",
    "/assets/images/WRC/12.jpeg",
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
