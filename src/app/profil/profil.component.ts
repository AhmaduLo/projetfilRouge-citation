import { Observable } from 'rxjs';
import { Citation } from './../read/Module/CitationModule';
import { AuthServiceService } from './../service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  
  submitForm = new FormGroup({
    citation: new FormGroup({
      id: new FormControl()
    }),
  });

  user: any;
  num = new Date().getTime();
  constructor(
    private route: ActivatedRoute,
    private authServiceService: AuthServiceService
  ) {}

  ngOnInit(): void {
    const routeId = this.route.snapshot.params.id;
    this.authServiceService.getId(routeId).subscribe(
      (res: any) => {
        this.user = res;
        //console.log(this.user.citations);
      },
      (errors) => {
        console.log('error');
      }
    );
  }

  supp(citation:any){
    this.authServiceService.deletId(this.user.id,citation).subscribe(
      (res:any)=>{
        console.log("delet");
        
      }
    )
  }
}
