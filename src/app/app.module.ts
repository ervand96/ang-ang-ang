import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CreateCardComponent } from './pages/create-card/create-card.page';
import { DeleteButtonComponent } from './component/delete-button/delete-button.component';
import { AppRoutingModule } from './app-routing.module';
import { CardInfoComponent } from './pages/card-info/card-info.page';
import { NotFoundComponent } from './pages/not-found/not-found.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent,
    DeleteButtonComponent,
    CardInfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
