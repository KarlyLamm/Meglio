import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FronteggAppModule, FronteggComponent } from '@frontegg/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FronteggAppModule.forRoot(
      {
        contextOptions: {
          baseUrl: 'https://[YOUR-SUB-DOMAIN].frontegg.com',
          clientId: '[YOUR-CLIENT-ID]'
        },
        hostedLoginBox: true,
      }
    ),
  ],
  providers: [],
  entryComponents: [FronteggComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
