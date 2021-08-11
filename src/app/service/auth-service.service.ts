import { Citation } from './../read/Module/CitationModule';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from '../signup/Model/User_object';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  stuffSubject = new Subject();
  constructor(private httpClient: HttpClient, private router: Router) {}

  post(newObject: User) {
    return this.httpClient.post<any>(
      'http://localhost:8080/api/auth/register',
      newObject
    );
  }

  //----------------------------------------------------------
  login(user: User): Observable<boolean> {
    return this.httpClient
      .post<any>('http://localhost:8080/api/auth/login', user)
      .pipe(
        map((resp: any) => {
          localStorage.setItem('TOKEN_APPLI', resp.accessToken),
            localStorage.setItem('id', resp.id);
          console.log('Token Save');
          return resp;
        })
      );
  }
  //------------------------------------------------------------------------

  send(newCitation: Citation, idUser: number) {
    return this.httpClient.post<any>(
      'http://localhost:8080/citation/' + idUser,
      newCitation
    );
  }

  get() {
    return this.httpClient.get<any>('http://localhost:8080/citation');
  }

  getId(id: number) {
    return this.httpClient.get<any>(
      'http://localhost:8080/api/auth/user/' + id
    );
  }

  deletId(id: any,citation: Citation){
    return this.httpClient.post<any>('http://localhost:8080/citation/'+id+"/user",citation);
  }

  getCitationId(id: number) {
    return this.httpClient.get<any>(
      'http://localhost:8080/citation/'+id
    );
  }

  updateCitation(id:number) {
    return this.httpClient.put<any>('http://localhost:8080/citation', id);
  }

  signout(){
    localStorage.removeItem('TOKEN_APPLI');
    this.router.navigate(['/']);
  }

  //-------------enregistrer le id du user dans le localSorage----------
  getIdByToken() {
    const id = localStorage.getItem('id');
    if (id) {
      return id;
    }
    return null;
  }
}
