import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CouponsComponent } from './coupens/coupons.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './overviewModels/media.component';
import { AddModelComponent } from './addModel/addModel.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {HttpClientModule} from "@angular/common/http";
import { FormatDatePipe } from './products/format-date.pipe';
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {NgxAnnotateTextModule} from "ngx-annotate-text";
import { UniqueButtonPipe } from './unique-button.pipe';
import { OneButtonPipe } from './pages/one-button.pipe';
import { ModelEditDialogComponent } from './model-edit-dialog/model-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    ProductsComponent,
    StatisticsComponent,
    CouponsComponent,
    AddModelComponent,
    FormatDatePipe,
    ModelEditDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    DashboardComponent,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    PagesComponent,
    MediaComponent,
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
