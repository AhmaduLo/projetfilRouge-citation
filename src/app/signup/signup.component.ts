import { AuthServiceService } from './../service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  submitForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
    passwordconfirmation: new FormControl('123456', Validators.required),
  });
  constructor(private authService:AuthServiceService , private router: Router) { }

  ngOnInit(): void {
  }

  valider() {
    const value = this.submitForm.value;    
  
    if (value) {
      this.authService.post(value).subscribe(
        (res: any) => {
          console.log('post reussi');
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log('post fail');
        }
      );
    }
  }
}


