import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'welcome',
        loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'forecast/:zipCode',
        loadChildren: () => import('./pages/forecast/forecast.module').then(m => m.ForecastModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
