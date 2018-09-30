import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromPhoto from '../store/gallery.reducers'
import { Store } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/firestore';
import * as fromApp from '../../store/app.reducers'
import * as fromAuth from '../../auth/store/auth.redux'


@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
  photoState: Observable<fromPhoto.State>;
  authState: Observable<fromAuth.State>

  logdIn = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.photoState = this.store.select('photos');
  }

  logIn(){
    this.logdIn = !this.logdIn;
  }

  dicideOnAountInRow(screenSize: string) {
      if (screenSize === 'gt-lg') {
        return 100 / 6.3;
      } else if(screenSize === 'lg') {
        return 100 / 4.9;
      } else if(screenSize === 'md') {
        return 100 / 4;
      } else if(screenSize === 'sm') {
        return 100 / 3;
      } else if(screenSize === 'xs') {
        return 100
      }
  }

}
