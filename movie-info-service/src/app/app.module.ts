import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild, ElementRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SearchdataComponent } from './searchdata/searchdata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { ShowrecommendationsComponent } from './showrecommendations/showrecommendations.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchdataComponent,
    SearchresultsComponent,
    ShowrecommendationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'check',
        sanitizer.bypassSecurityTrustResourceUrl('assets/check-24px.svg'));
    iconRegistry.addSvgIcon(
      'not-interested',
      sanitizer.bypassSecurityTrustResourceUrl('assets/not_interested-24px.svg'));
      iconRegistry.addSvgIcon(
        'cancel',
        sanitizer.bypassSecurityTrustResourceUrl('assets/cancel-24px.svg'));
      iconRegistry.addSvgIcon(
      'favorite',
      sanitizer.bypassSecurityTrustResourceUrl('assets/favorite-24px.svg'));
      iconRegistry.addSvgIcon(
        'search',
        sanitizer.bypassSecurityTrustResourceUrl('assets/search-24px.svg'));
    
  }
  
 }
