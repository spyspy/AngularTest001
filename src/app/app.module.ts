import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test2Component } from './test2/test2.component';
import { Test1Component } from './test1/test1.component';
import { Test3Component } from './test3/test3.component';
import { WowComponent } from './test3/wow/wow.component';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    Test1Component,
    Test3Component,
    WowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
