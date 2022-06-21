import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent,
    DeleteButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
