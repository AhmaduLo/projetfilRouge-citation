import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
