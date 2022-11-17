import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { ColieComponent } from './colie/colie.component';
import { LoginComponent } from './login/login.component';
import { MagazinierComponent } from './magazinier/magazinier.component';
import { ModifiChauffeurComponent } from './modifi-chauffeur/modifi-chauffeur.component';
import { ParkComponent } from './park/park.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'chauffeur', component: ChauffeurComponent},
  { path: 'colie', component: ColieComponent},
  { path: 'park', component: ParkComponent},
  { path: 'login', component: LoginComponent},
  { path: 'magazinier', component: MagazinierComponent},
  { path: 'modifiChauffeur/:id', component: ModifiChauffeurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
