import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from '../presentation/component/menu/menu.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [MainComponent]
})
export class MainModule { }
