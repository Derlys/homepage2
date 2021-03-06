import { Routes } from '@angular/router'
import { LayoutComponent } from './ui/layout/layout.component'

const footerText = '&copy;2020'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'es' },
  {
    path: 'en',
    component: LayoutComponent,
    data: {
      footerText,
      lang: 'en',
      links: [
        { path: 'home', label: 'Home' },
        { path: 'apply-now', label: 'Apply now' },
        { path: 'about-us', label: 'About us' },
        { path: 'allies', label: 'Allies' },
        { path: 'sponsors', label: 'Sponsors' },
        { path: 'donations', label: 'Donations' },
      ],
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./en/en-routing.module').then((m) => m.EnRoutingModule),
      },
    ],
  },
  {
    path: 'es',
    component: LayoutComponent,
    data: {
      footerText,
      lang: 'es',
      links: [
        { path: 'inicio', label: 'Inicio' },
        { path: 'mi-historia', label: 'Mi historia' },
        { path: 'blog', label: 'Blog' },
        { path: 'subscribete', label: 'Subscríbete' },
      ],
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./es/es-routing.module').then((m) => m.EsRoutingModule),
      },
    ],
  },
]
