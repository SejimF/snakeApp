import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularCustomMaterialModule } from './core/angularCustomMaterial.module';
import { GalleryRouterModule } from './gallery/gallery-routing.module';
import { GalleryModule } from './gallery/gallery.module';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularFire2/database'
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthEffects } from './auth/store/auth.effects';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    CoreModule,
    SharedModule,

    StoreModule.forRoot(reducers),
    StoreRootModule,
    AppRoutingModule,
    EffectsModule.forRoot([AuthEffects]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,

    BrowserAnimationsModule,
    AngularCustomMaterialModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
