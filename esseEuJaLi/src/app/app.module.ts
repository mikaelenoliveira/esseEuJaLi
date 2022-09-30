import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EstanteComponent } from './estante/estante.component';
import { RankingLeitoresComponent } from './ranking-leitores/ranking-leitores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BibliotecaComponent,
    HeaderComponent,
    FooterComponent,
    EstanteComponent,
    RankingLeitoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
