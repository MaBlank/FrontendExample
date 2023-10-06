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
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {HttpClientModule} from "@angular/common/http";
import { FormatDatePipe } from './format-date.pipe';

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
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
