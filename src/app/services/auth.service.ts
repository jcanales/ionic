import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth"
import { promise } from 'protractor';
import { Router } from "@angular/router";
import { RouteID } from '@ionic/core';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router) { }

login(email:string, password:string){

    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
       }).catch(err => rejected(err));

    });

  }

  logOut(){
    this.AFauth.auth.signOut().then(() => (
      this.router.navigate(['/login'])
    
    ));
  }

}