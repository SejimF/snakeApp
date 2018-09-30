import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "../app-routing.module";
import { AngularCustomMaterialModule } from "./angularCustomMaterial.module";
import { MySnakesComponent } from './my-snakes/my-snakes.component';
import { GalleryComponent } from "../gallery/gallery.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        MySnakesComponent

    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AngularCustomMaterialModule
    ],
    exports: [
        HeaderComponent,
        HomeComponent
    ]
})
export class CoreModule {}