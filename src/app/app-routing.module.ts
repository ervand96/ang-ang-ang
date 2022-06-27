import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then((a) => a.NotFoundModule)
  },
  { path: '**', redirectTo: 'not-found' },
  {
    path: 'cards',
    loadChildren: () => import('./pages/create-card/create-card.module').then((a) => a.CreateCardModule)
  },
  {
    path: 'cards/:id',
    loadChildren: () => import('./pages/card-info/card-info.module').then((a) => a.CardInfoModule)
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule { }
