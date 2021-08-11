import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  submitForm = new FormGroup({
    id: new FormControl(''),
    text: new FormControl('', [Validators.required]),

  });

  constructor(private authService: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router
   
   ) { }

  ngOnInit(): void {
    const UserId = this.route.snapshot.params.id;
    this.authService.getCitationId(UserId).subscribe(
      (res:any)=>{
        //console.log(res);
        
        this.submitForm.patchValue(res);
      }
    )
  
  }

  valider() {
    const value = this.submitForm.value;
    console.log(value);
    this.authService.updateCitation(value).subscribe(
      (resp: any) => {
        this.router.navigate(['/acceuil']);
      },
      (error) => {
        console.log('error while');
      }
    );
  
  }

}
