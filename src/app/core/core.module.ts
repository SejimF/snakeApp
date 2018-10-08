import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "../app-routing.module";
import { AngularCustomMaterialModule } from "./angularCustomMaterial.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { platformBrowser } from "@angular/platform-browser";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
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
        FooterComponent
    ]
})
export class CoreModule {}