import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { BotaoComponent } from './botao/botao.component';
import { PokemonService } from './services/pokemon.service';
import { TelaComponent } from './tela/tela.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BotaoComponent,
    TelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
