import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {}

  async handleClick() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['sign-up']);
  }
}
