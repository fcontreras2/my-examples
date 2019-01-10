import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoFoundComponent } from './no-found/no-found.component';
import { LineLoaderComponent } from './line-loader/line-loader.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    NoFoundComponent,
    LineLoaderComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NoFoundComponent,
    LineLoaderComponent,
    InputComponent
  ]
})
export class SharedModule { }
