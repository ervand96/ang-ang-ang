import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { AppRoutingModule } from './app-routing.module';
import { CardInfoComponent } from './card-info/card-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
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
