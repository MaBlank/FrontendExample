import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './coupens/coupons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './overviewModels/media.component';
import { PagesComponent } from './pages/pages.component';
import { AddModelComponent } from './addModel/addModel.component';
import {SpacyComponent} from "./spacy/spacy.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'coupens', component: CouponsComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: AddModelComponent},
  {path: 'spacy', component: SpacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
