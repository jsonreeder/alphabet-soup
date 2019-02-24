import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async handleClick() {
    await this.afAuth.auth.signInAnonymously();
    this.router.navigate(['']);
  }

}
