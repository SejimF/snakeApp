import { ActionReducerMap } from '@ngrx/store';
import * as fromPhotoList from '../gallery/store/gallery.reducers'
import * as fromAuth from '../auth/store/auth.redux'

export interface AppState {
    photoState: fromPhotoList.State,
    auth: fromAuth.State
}

export const reducers: ActionReducerMap<AppState> = {
    photoState: fromPhotoList.galleryReducer,
    auth: fromAuth.authReducer
}