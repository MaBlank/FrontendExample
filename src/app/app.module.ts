import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { MakeGPT4Component } from './makeGPT4Modell/makeGPT4.component';
import { AnnotateComponent } from './annotate/annotate.component';
import { OverviewmodelsComponent } from './overviewModels/overviewmodels.component';
import { AddModelComponent } from './addModel/addModel.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {HttpClientModule} from "@angular/common/http";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {NgxAnnotateTextModule} from "ngx-annotate-text";
import { ModelEditDialogComponent } from './model-edit-dialog/model-edit-dialog.component';
import { SpacyComponent } from './spacy/spacy.component';
import { DictionaryComponent } from './dictionary/dictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    MakeGPT4Component,
    AddModelComponent,
    ModelEditDialogComponent,
    SpacyComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    EvaluationComponent,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    AnnotateComponent,
    OverviewmodelsComponent,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    NgxAnnotateTextModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
