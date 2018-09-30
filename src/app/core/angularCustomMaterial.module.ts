import { NgModule } from "@angular/core";


import {
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule
  } from '@angular/material';
  import {MatTabsModule} from '@angular/material/tabs';
  import {MatCardModule} from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from '@angular/material/input';




@NgModule({
    imports:[   
        MatMenuModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        LayoutModule,
        FlexLayoutModule,
        MatInputModule
    ],
    exports: [
        MatMenuModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        LayoutModule,
        FlexLayoutModule,
        MatInputModule
    ]
})
export class AngularCustomMaterialModule{}