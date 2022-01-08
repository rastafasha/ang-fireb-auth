import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';




import { LoginData } from '../interfaces/login-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(
    public angularFireAuth: AngularFireAuth
    ) {   }

  login(email: string, password: string){
    const result =  this.angularFireAuth.signInWithEmailAndPassword(
      email,
      password
    );

    return result;
  }

   register(email: string, password: string){
     const result =  this.angularFireAuth.createUserWithEmailAndPassword(
       email,
       password
       );
       return result;
  }

   logout(){
     this.angularFireAuth.signOut();
  }


  getCurrentUser(){
    return this.angularFireAuth.authState.pipe(first()).toPromise();
  }
}
