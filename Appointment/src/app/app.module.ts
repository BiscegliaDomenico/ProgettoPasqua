import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormInserimentoComponent } from './form-inserimento/form-inserimento.component';
import { FormListaComponent } from './form-lista/form-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInserimentoComponent,
    FormListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
