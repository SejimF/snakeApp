import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp  from '../../store/app.reducers'
import { Observable, Subscription } from 'rxjs';
import * as fromPhoto from '../store/gallery.reducers'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Photo } from '../photo.model';

@Component({
  selector: 'app-gallery-image-viewer',
  templateUrl: './gallery-image-viewer.component.html',
  styleUrls: ['./gallery-image-viewer.component.css']
})
export class GalleryImageViewerComponent implements OnInit, OnChanges {
  images$: Observable<fromPhoto.State>;
  imageArrayLength: number;
  imageIndex : number;
  paramSubscriber: Subscription;



  constructor(private store: Store<fromPhoto.FeatureState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.paramSubscriber = this.route.params.subscribe(
      (params: Params) => {
        this.imageIndex = +params['id'];
        this.images$ = this.store.select('photos');
      }
    )

    this.store.select('photos').subscribe(result => {
      this.imageArrayLength = result.photos.length;
      // console.log(result.photos.length);
    })



  }

  ngOnChanges(){


  }

nextImage() {
  if(this.imageIndex > this.imageArrayLength-2){
    this.router.navigate(['../', 0], {relativeTo: this.route});
  } else {
  this.imageIndex++;
      this.router.navigate(['../', this.imageIndex], {relativeTo: this.route});
  }
}

prevImage(){
  if(this.imageIndex < 1){
    this.router.navigate(['../', this.imageArrayLength-1], {relativeTo: this.route});
  } else {
  this.imageIndex--;
  this.router.navigate(['../', this.imageIndex], {relativeTo: this.route});
  }
}

closeGallery(){
  this.router.navigate(['mysnakes']);
}

}
