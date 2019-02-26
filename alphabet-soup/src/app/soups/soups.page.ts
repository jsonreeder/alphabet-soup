import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-soups',
  templateUrl: 'soups.page.html',
  styleUrls: ['soups.page.scss']
})
export class SoupsPage implements OnInit {
  soups: Observable<any>;
  soupsCount: number;

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
        tap(actions => this.soupsCount = actions.length),
        map(actions => actions.map(a => ({id: a.payload.doc.id})))
      );
  }

  handleClick() {
    const nextId = this.soupsCount + 1;
    const userId = this.afAuth.auth.currentUser.uid;
    this.afs.doc(`users/${userId}/soups/${nextId}`).set({});
  }
}
