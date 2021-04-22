import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'inicio' },

      {
        path: '',
        children: [
          {
            path: 'mi-historia',
            loadChildren: () => import('./mi-historia/mi-historia.module').then((m) => m.MiHistoriaModule),
          },
          {
            path: 'inicio',
            loadChildren: () => import('./inicio/inicio.module').then((m) => m.InicioModule),
          },
          {
            path: 'blog',
            loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
          },
          {
            path: 'subscribete',
            loadChildren: () => import('./subscribete/subscribete.module').then((m) => m.SubscribeteModule),
          },
        ],
      },
    ]),
  ],
})
export class EsRoutingModule {}
