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
import { GalleryImageViewerComponent } from "./gallery-image-viewer/gallery-image-viewer.component";
import { CommonModule } from "@angular/common";
import { GalleryRouterModule } from "./gallery-routing.module";


@NgModule({
    declarations: [
        GalleryComponent,
        GalleryItemComponent,
        GalleryListComponent,
        GalleryAddPhotoComponent,
        GalleryImageViewerComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        GalleryRouterModule,
        ReactiveFormsModule,
        AngularCustomMaterialModule,
        StoreModule.forFeature('photos', galleryReducer),
        EffectsModule.forFeature([GalleryEffects])
    ]
})
export class GalleryModule{}