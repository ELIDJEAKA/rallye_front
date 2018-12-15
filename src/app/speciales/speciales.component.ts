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
    "https://cdn.pixabay.com/photo/2017/06/19/19/05/rally-2420637_960_720.jpg",
    "http://images.larepubliquedespyrenees.fr/2017/03/01/58b71395a43f5ea4166d895e/golden/le-35e-rallye-d-arzacq-c-est-ce-week-end.jpg",
    "https://cdn-s-www.ledauphine.com/images/837830C2-C1BD-49B5-80E0-47275C792976/LDL_V0_12/sebastien-ogier-a-remporte-le-rallye-de-grande-bretagne-photo-geoff-caddick-afp-1539653919.jpg",
    "http://sf2.sport365.fr/wp-content/uploads/se/2016/01/299112-750x410.jpg",
    "http://pilote-de-course.com/wp-content/uploads/2017/01/Dakar-2017-Etape-12-3008-DKR-Peterhansel-678x381.jpg",
    "http://4x4terredusud.com/wp-content/uploads/rallye-maroc-2017.jpg",
    "https://media.ouest-france.fr/v1/pictures/ecf708afdef121d3cb7bcc6aabc79611-rallye-wrc-canal-acquiert-les-droits-de-diffusion-partir-de-2019.jpg?width=1260&height=712&fill=0&focuspoint=56%2C65&cropresize=1"
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
