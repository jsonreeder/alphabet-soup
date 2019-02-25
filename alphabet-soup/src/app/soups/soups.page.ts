import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-soups',
  templateUrl: 'soups.page.html',
  styleUrls: ['soups.page.scss']
})
export class SoupsPage implements OnInit {
  soups: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {}

  ngOnInit() {
    const userId = this.afAuth.auth.currentUser.uid;
    this.soups = this.afs
      .collection(`users/${userId}/soups`)
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => ({id: a.payload.doc.id})))
      );
  }

  handleClick() {
    const userId = this.afAuth.auth.currentUser.uid;
    this.afs.collection(`users/${userId}/soups`).add({});
  }
}
