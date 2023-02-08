import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DumbComponent } from './components/dumb/dumb.component';
import { SmartComponent } from './components/smart/smart.component';

@NgModule({
  declarations: [
    AppComponent,
    DumbComponent,
    SmartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
