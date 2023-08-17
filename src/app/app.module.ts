import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from 'src/components/search-bar/search-bar.component';
import { UserDataComponent } from 'src/components/user-data/user-data.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
