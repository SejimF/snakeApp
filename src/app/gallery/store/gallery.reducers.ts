
import * as GalleryActions from './gallery.actions'
import * as fromApp from '../../store/app.reducers'
import { Photo } from '../photo.model';

export interface FeatureState extends fromApp.AppState {
    photos: State
}

// Define state

export interface State {
    loading: boolean;
    photos: Photo[];
}

// Define initial state

const initialState : State = {
    loading: false,
    photos: []
};

// reducer function

export function galleryReducer(state = initialState, action: GalleryActions.GalleryActions) {

    switch (action.type) {
        case (GalleryActions.SET_PHOTO):
        return {
            ...state,
            photos: [...action.payload], loading: false
        };

        case GalleryActions.FETCH_PHOTOS: {
            return {
                ...state,
                loading: true
            }
        }
        default: {
            return state;
        }
    }





}






// new Photo('Snake 1', 'https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_snakes.jpg', 'First snake'),
// new Photo('Snake 2', 'https://i.ytimg.com/vi/CP5Ro3oy-ec/maxresdefault.jpg', 'sec snake'),
// new Photo('Snake 3', 'https://amp.businessinsider.com/images/58bd6687dd089573368b4884-1920-960.jpg', 'three snake'),
// new Photo('Snake 4', '../../../assets/IMG-20180923-WA0000.jpg', 'for snake'),
// new Photo('Snake 5', 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/AusGeo/2013/09/10/6393/tiger-snake-Notechis_ater.jpg', 'five snake'),
// new Photo('Snake 6', '../../../assets/IMG-20180923-WA0001.jpg', 'six snake'),
// new Photo('Snake 7', '../../../assets/IMG-20180923-WA0002.jpg', 'seven snake'),
// new Photo('Snake 8', '../../../assets/IMG-20180923-WA0003.jpg', 'eight snake'),
// new Photo('Snake 8', '../../../assets/IMG-20180923-WA0004.jpg', 'eight snake'),
// new Photo('Snake 8', '../../../assets/IMG-20180923-WA0005.jpg', 'eight snake')