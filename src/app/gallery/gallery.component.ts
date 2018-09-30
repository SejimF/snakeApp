import { Component, OnInit } from '@angular/core';
import * as fromApp from '../store/app.reducers';
import { Store } from '@ngrx/store';
import * as GalleryActions from './store/gallery.actions'

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GalleryActions.FetchPhotos() )
  }

}
