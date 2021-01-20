import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CardComponent } from './shared/component/card/card.component';
import { BoxListComponent } from './shared/component/box-list/box-list.component';
import {HttpService, StudentService, TeacherService, UrlService} from "./common/services";
import {HttpClientModule} from "@angular/common/http";
import { DistrictComponent } from './pages/district/district.component';
import {DistrictService} from "./common/services";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    CardComponent,
    BoxListComponent,
    DistrictComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // All services are need to store on main module provider folders
  providers: [ HttpService, UrlService, StudentService, TeacherService, DistrictService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
