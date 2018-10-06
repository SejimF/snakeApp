import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GalleryImageViewerComponent } from "./gallery-image-viewer/gallery-image-viewer.component";
import { GalleryComponent } from "./gallery.component";

const galleryRoutes: Routes  = [
    {path: '', component: GalleryComponent, children: [
        {path: ':id', component: GalleryImageViewerComponent}
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(galleryRoutes)
    ],
    exports: [RouterModule]
})
export class GalleryRouterModule {}