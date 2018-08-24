import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DxSelectBoxModule,
  DxCheckBoxModule,
  DxDateBoxModule,
  DxCalendarModule,
  DxTemplateModule,DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    DxSelectBoxModule,
    DxCalendarModule,
    DxCheckBoxModule,
    DxDateBoxModule,
    DxTemplateModule,DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
