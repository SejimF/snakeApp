import { Injectable } from '@angular/core';
import {AngularFireList } from 'angularfire2/database';
import { Photo } from './photo.model';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GalleryFirebaseService {
  items: AngularFireList<Photo>


  constructor(private db: AngularFireDatabase) {
    this.items = db.list('photoGallery');
   }

   getPhotos(){
    return this.items;
    console.log(this.items);
   }
}
