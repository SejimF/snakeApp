import { NgModule } from "@angular/core";
import {Routes, RouterModule}     from '@angular/router'
import { HomeComponent } from "./core/home/home.component";
import { MySnakesComponent } from "./core/my-snakes/my-snakes.component";
import { GalleryComponent } from "./gallery/gallery.component";

const appRoutes: Routes  = [
    {path: "", component: HomeComponent},
    {path: 'mysnakes', component: GalleryComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}