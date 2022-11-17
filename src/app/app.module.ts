import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { FormsModule } from '@angular/forms';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { ModifiChauffeurComponent } from './modifi-chauffeur/modifi-chauffeur.component';
import { LoginComponent } from './login/login.component';
import { MagazinierComponent } from './magazinier/magazinier.component';
import { ParkComponent } from './park/park.component';
import { ColieComponent } from './colie/colie.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    ChauffeurComponent,
    ModifiChauffeurComponent,
    LoginComponent,
    MagazinierComponent,
    ParkComponent,
    ColieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
