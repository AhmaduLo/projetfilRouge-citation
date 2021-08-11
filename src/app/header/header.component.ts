import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
idUser:any;
  constructor(private route: ActivatedRoute, private authServiceService: AuthServiceService) { }

  ngOnInit(): void {
    this.idUser= this.authServiceService.getIdByToken(); 
   // console.log(this.idUser);
  }

  sign_out(){
    this.authServiceService.signout();
    console.log('yes');
    
  }
  

}
