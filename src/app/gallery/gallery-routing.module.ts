import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MySnakesComponent } from "../core/my-snakes/my-snakes.component";

const appRoutes: Routes  = [
    {path: 'gallery', component: MySnakesComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class GalleryRouterModule {}