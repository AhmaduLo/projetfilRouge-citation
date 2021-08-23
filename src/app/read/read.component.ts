import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {

  submitForm = new FormGroup({
    text: new FormControl('', [Validators.required]),
  });
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  valider() {
    const value = this.submitForm.value;
    const idUser:any= this.authService.getIdByToken();   
    if (this.submitForm.valid) {
      this.authService.send(value,idUser).subscribe(
        (res: any) => {
          console.log('post reussit');
          this.router.navigate(['/acceuil'])
        }
      );
    }
  }
}
