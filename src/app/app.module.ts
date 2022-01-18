import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainSectionComponent } from './components/main-section/main-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeaderMainComponent,
    MainSectionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }