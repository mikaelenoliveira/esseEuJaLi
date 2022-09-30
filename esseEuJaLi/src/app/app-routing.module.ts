import { RankingLeitoresComponent } from './ranking-leitores/ranking-leitores.component';
import { EstanteComponent } from './estante/estante.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '/home',
    component: HomeComponent,
  },
  {
    path: '/footer',
    component: FooterComponent,
  },
  {
    path: '/header',
    component: HeaderComponent,
  },
  {
    path: '/biblioteca',
    component: BibliotecaComponent,
  },
  {
    path: '/estante',
    component: EstanteComponent,
  },
  {
    path: '/rankingLeitores',
    component: RankingLeitoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
