import { AuthServiceService } from './../service/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
citation:any;
random:any;
  constructor(private authServiceService:AuthServiceService) { }

  ngOnInit(): void {
  }

  getcitation(){
    this.authServiceService.get().subscribe(
      (res:any)=>{
        this.citation=res;
      //console.log(this.citation);
        this.random = this.citation[Math.floor(Math.random() * this.citation.length)]
       //console.log(this.random.text);
       
        
      }
    )

  }

}
