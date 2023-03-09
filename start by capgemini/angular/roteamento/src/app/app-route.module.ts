import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PaginaComParamentrosComponent } from './pagina-com-paramentros/pagina-com-paramentros.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

const routes: Routes = [
  {path: "primeira-pagina", component: PrimeiraPaginaComponent },
  {path: "segunda-pagina", component: SegundaPaginaComponent	},
  {path: "", redirectTo: "primeira-pagina", pathMatch: "full"},
  {path: "pagina-com-parametros/:id", component: PaginaComParamentrosComponent},
  {path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {path: "**", component: PaginaNaoEncontradaComponent}
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }