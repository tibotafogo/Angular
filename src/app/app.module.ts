import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroAppComponent } from './components/primeiro-app/primeiro-app.component';
import { SegundoAppComponent } from './components/segundo-app/segundo-app.component';
import { TerceiroAppComponent } from './components/terceiro-app/terceiro-app.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { Diretivas2Component } from './components/diretivas2/diretivas2.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroAppComponent,
    SegundoAppComponent,
    TerceiroAppComponent,
    DiretivasComponent,
    Diretivas2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
