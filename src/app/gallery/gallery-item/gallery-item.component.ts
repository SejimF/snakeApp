import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../photo.model';
import { Store } from '@ngrx/store';
import * as fromPhoto from '../store/gallery.reducers'
import * as GalleryActions from '../store/gallery.actions'
import * as fromAuth from '../../auth/store/auth.redux'
import * as fromApp from '../../store/app.reducers'
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item..component.css']
})
export class GalleryItemComponent implements OnInit {
  photoForm: FormGroup;
  @Input() photo: Photo;
  edit_mode = false;
  authState: Observable<fromAuth.State>
  @Input()imageIndex: number;
  @Output()imageIndexSender = new EventEmitter<number>()
  

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.photoForm = new FormGroup({
      'title': new FormControl(null),
      'imageUrl': new FormControl(null),
      'description': new FormControl(null)
    })
  }

  onDelete(key:string){
    this.store.dispatch(new GalleryActions.DeletePhoto(key))
  }

  onEdit() {
    this.edit_mode = !this.edit_mode;
    console.log('edit mode')
  }

  submitNewPhoto(){
    this.edit_mode = !this.edit_mode;
    this.store.dispatch(new GalleryActions.UpdatePhoto( {dbKey: this.photo.pushKey, updatedPhoto: this.photoForm.value}));
  }

  imageClicked(){
    this.imageIndexSender.emit(this.imageIndex);
    console.log("clicked inside: " + this.imageIndex);
  }

}
