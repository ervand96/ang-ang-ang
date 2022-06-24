import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.page';
import { CardInfoComponent } from './pages/card-info/card-info.page';

const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: '**/**', component: NotFoundComponent },
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
