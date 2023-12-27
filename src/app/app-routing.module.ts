import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeGPT4Component } from './makeGPT4Modell/makeGPT4.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { OverviewmodelsComponent } from './overviewModels/overviewmodels.component';
import { AnnotateComponent } from './annotate/annotate.component';
import { AddModelComponent } from './addModel/addModel.component';
import {SpacyComponent} from "./spacy/spacy.component";
import {DictionaryComponent} from "./dictionary/dictionary.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: EvaluationComponent},
  {path: 'coupens', component: MakeGPT4Component},
  {path: 'pages', component: AnnotateComponent},
  {path: 'media', component: OverviewmodelsComponent},
  {path: 'settings', component: AddModelComponent},
  {path: 'spacy', component: SpacyComponent},
  {path: 'dictionary', component: DictionaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
