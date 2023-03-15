import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { InfoContactComponent } from './info-contact/info-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    NavegacaoComponent,
    InfoContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
