import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YuqinshanComponent } from './yuqinshan/yuqinshan.component';
import { PrevDirective } from './yuqinshan/prev.directive';
import { NextDirective } from './yuqinshan/next.directive';
import { PackagingWorkComponent } from './packaging-work/packaging-work.component';
import { KaryoosiComponent } from './karyoosi/karyoosi.component';



@NgModule({
  declarations: [
    YuqinshanComponent,
    PrevDirective,
    NextDirective,
    PackagingWorkComponent,
    KaryoosiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExternalLinkModule { }
