import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
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
import {CommonModule, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    ProductsComponent,
    StatisticsComponent,
    SettingsComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    CommonModule,
    NgIf,
    DashboardComponent,
    BrowserAnimationsModule,
    PagesComponent,
    AppRoutingModule,
    MediaComponent,
    CoupensComponent,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
