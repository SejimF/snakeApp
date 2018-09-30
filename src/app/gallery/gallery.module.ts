import { NgModule } from "@angular/core";
import { GalleryComponent } from "./gallery.component";
import { SharedModule } from "../shared/shared.module";
import { AngularCustomMaterialModule } from "../core/angularCustomMaterial.module";
import { GalleryItemComponent } from "./gallery-item/gallery-item.component";
import { StoreModule } from "@ngrx/store";
import { galleryReducer } from "./store/gallery.reducers";
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryAddPhotoComponent } from "./gallery-add-photo/gallery-add-photo.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { GalleryEffects } from "./store/gallery.effects";


@NgModule({
    declarations: [
        GalleryComponent,
        GalleryItemComponent,
        GalleryListComponent,
        GalleryAddPhotoComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        AngularCustomMaterialModule,
        StoreModule.forFeature('photos', galleryReducer),
        EffectsModule.forFeature([GalleryEffects])
    ],
    exports: [
        GalleryComponent,
        GalleryItemComponent
    ]
})
export class GalleryModule{}