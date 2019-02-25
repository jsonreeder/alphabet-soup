import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-soup',
  templateUrl: './soup.page.html',
  styleUrls: ['./soup.page.scss'],
})
export class SoupPage implements OnInit {
  id: Observable<string>;
  ingredients: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const userId = this.afAuth.auth.currentUser.uid;
    this.id = this.route.params.pipe(
      tap(params => this.ingredients = this.afs
        .collection(`users/${userId}/soups/${params.id}/ingredients`)
        .valueChanges()),
      map(params => params.id),
    );
  }
}
