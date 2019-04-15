import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// LAYOUT MODULES
import { LayoutModule } from './layout/layouts.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
