import { Action } from "@ngrx/store";
import { Photo } from "../photo.model";

export const SET_PHOTO = 'SET_PHOTO';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const STORE_PHOTO = 'STORE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const UPDATE_PHOTO = 'UPDATE_PHOTO';

export class FetchPhotos implements Action {
    readonly type = FETCH_PHOTOS;
    constructor(){}
}

export class SetPhoto implements Action {
    readonly type = SET_PHOTO;
    constructor(public payload: Photo[]) {}
}

export class StorePhoto implements Action {
    readonly type = STORE_PHOTO;
    constructor(public payload: Photo){}
}

export class DeletePhoto implements Action {
    readonly type = DELETE_PHOTO;
    constructor(public payload: string){}
}

export class UpdatePhoto implements Action {
    readonly type = UPDATE_PHOTO;
    constructor(public payload: {dbKey: string, updatedPhoto: Photo}){}
    // constructor(public payload: Photo){}
}




export type GalleryActions =  FetchPhotos | SetPhoto | StorePhoto | UpdatePhoto;