import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
