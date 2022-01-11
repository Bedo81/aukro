import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { HeaderComponent } from './header/header.component';
import { ActionsComponent } from './actions/actions.component';
import { PhotoCardsComponent } from './photo-cards/photo-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoCardComponent,
    HeaderComponent,
    ActionsComponent,
    PhotoCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
