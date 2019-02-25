import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-soup',
  templateUrl: './soup.page.html',
  styleUrls: ['./soup.page.scss'],
})
export class SoupPage implements OnInit {
  id: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.params.pipe(
      map(params => params.id)
    );
  }

}
