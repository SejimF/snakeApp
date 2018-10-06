import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as fromGallery from './gallery.reducers';
import * as GalleryActions from './gallery.actions'
import {switchMap, map} from 'rxjs/operators'
import { Photo } from "../photo.model";
import { GalleryFirebaseService } from "../gallery-firebase.service";
import { AngularFireDatabase } from "angularfire2/database";
import { from } from 'rxjs';



@Injectable()
export class GalleryEffects {

    /////////////////////////////////////////////////
    //     Downloading PHOTO's from firebase database
    ////////////////////////////////////////////////

    @Effect() 
    photoFetch = this.actions$.ofType(GalleryActions.FETCH_PHOTOS)
        .pipe(switchMap((action: GalleryActions.FetchPhotos) => {
            // FETCHING PHOTO FROM FIRESTONE DATABASE
            return  this.firebaseDatabase.list<Photo>('photos').valueChanges()
            
        }), map(
            (photos) => {
                // SUBSCRIBING TO THE LIST
               this.firebaseDatabase.list<Photo>('photos').snapshotChanges().subscribe(actions => {
                     let counter = 0; // COUNTER FOR INDEXING FOOR LOOP
                    actions.forEach( action => {    
                        try {
                            let id = action.payload.key;            // ID = KEY FROM DATABASE
                            // console.log(id);  
                            photos[counter].pushKey = id;
                            // console.log('success');
                        } catch (error) {
                            // console.log('pushKey undefaind');
                            
                        }
  
                           //KEY AT THE INDEX = ID
                        counter++      
                                                        //INCREASING INDEX   
                    })
                })
                // console.log(photos)
                return {
                    type: GalleryActions.SET_PHOTO,
                    payload: photos
                };
            }
        ));

    /////////////////////////////////////////////////
    //          STORING PHOTO ON SERVER
    ////////////////////////////////////////////////

        @Effect({dispatch: false})
        sendPhoto = this.actions$.ofType(GalleryActions.STORE_PHOTO)
            .pipe(map((action: GalleryActions.StorePhoto) => {
                return action.payload;
            })
            ,switchMap((photo: Photo) => {
                return from(this.firebaseDatabase.list('photos').push(photo));
            })
            );

    /////////////////////////////////////////////////
    //           DELETING PHOTO  FROM SERVER 
    ////////////////////////////////////////////////

    @Effect({dispatch: false})
    deletePhoto = this.actions$.ofType(GalleryActions.DELETE_PHOTO)
        .pipe(map((action: GalleryActions.DeletePhoto) => {
            return action.payload;
        })
        ,switchMap((photo) => {
            return from(this.firebaseDatabase.list('photos').remove(photo));
        })
        );

    /////////////////////////////////////////////////
    //           UPDATING PHOTO  ON SERVER
    ////////////////////////////////////////////////

    @Effect({dispatch: false})
    updatePhoto = this.actions$.ofType(GalleryActions.UPDATE_PHOTO)
        .pipe(map((action: GalleryActions.UpdatePhoto) => {
            return action.payload;
        })
        ,switchMap(( data: { dbKey: string, updatedPhoto: Photo}) => {
            return from(this.firebaseDatabase.list('photos').update(data.dbKey, data.updatedPhoto));
        })
        );




    constructor(private actions$: Actions, private firebaseDatabase: AngularFireDatabase) {}

}
