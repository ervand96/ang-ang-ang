import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'cards', component: CreateCardComponent },
  { path: 'cards/:id', component: CardInfoComponent },
  { path: '**/**', component: NotFoundComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule { }
