import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ContactComponent } from './contact/contact.component';
import { InfoContactComponent } from './info-contact/info-contact.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'header' , component:CabecalhoComponent},
  {path:'contact', component:ContactComponent,
      children: [
        {
          path: 'info', component:InfoContactComponent
        }
      ]

  },
  {path:'service', component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
