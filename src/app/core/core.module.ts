import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "../app-routing.module";
import { AngularCustomMaterialModule } from "./angularCustomMaterial.module";
import { MySnakesComponent } from './my-snakes/my-snakes.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        MySnakesComponent,
        FooterComponent

    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AngularCustomMaterialModule
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        MySnakesComponent,
        FooterComponent
    ]
})
export class CoreModule {}