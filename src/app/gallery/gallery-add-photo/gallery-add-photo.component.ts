import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromGallery from '../store/gallery.reducers'
import * as GalleryActions from '../store/gallery.actions'

@Component({
  selector: 'app-gallery-add-photo',
  templateUrl: './gallery-add-photo.component.html',
  styleUrls: ['./gallery-add-photo.component.css']
})
export class GalleryAddPhotoComponent implements OnInit {

  photoForm: FormGroup;

  constructor(private store: Store<fromGallery.FeatureState>) { }

  ngOnInit() {
    this.photoForm = new FormGroup({
      'title': new FormControl(null),
      'imageUrl': new FormControl(null),
      'description': new FormControl(null)
    })
  }

  submitForm() {
    this.store.dispatch(new GalleryActions.StorePhoto(this.photoForm.value))
    this.photoForm.reset();
  }



}
