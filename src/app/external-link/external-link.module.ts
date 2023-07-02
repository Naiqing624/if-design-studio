import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YuqinshanComponent } from './yuqinshan/yuqinshan.component';
import { PrevDirective } from './yuqinshan/prev.directive';
import { NextDirective } from './yuqinshan/next.directive';



@NgModule({
  declarations: [
    YuqinshanComponent,
    PrevDirective,
    NextDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ExternalLinkModule { }
