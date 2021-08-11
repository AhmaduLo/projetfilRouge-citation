import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';
import { User } from './Model/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  idUser:any;
  user = new User();
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idUser= this.authService.getIdByToken(); 
    console.log(this.idUser);
  }

  valider() {
    const value = this.submitForm.value;
    console.log(value);
    this.authService.login(value).subscribe(
      (resp: any) => {
        console.log('Connection succeed', resp);
        this.router.navigate(['/acceuil']);
      },
      (error) => {
        console.log('error while');
      }
    );
  }
}
