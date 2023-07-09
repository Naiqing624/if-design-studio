import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YuqinshanComponent } from './yuqinshan/yuqinshan.component';
import { PrevDirective } from './yuqinshan/prev.directive';
import { NextDirective } from './yuqinshan/next.directive';
import { PackagingWorkComponent } from './packaging-work/packaging-work.component';
import { ProductOneComponent } from './products/product-one/product-one.component';
import { ProductTwoComponent } from './products/product-two/product-two.component';
import { ProductThreeComponent } from './products/product-three/product-three.component';
import { ProductFourComponent } from './products/product-four/product-four.component';

@NgModule({
  declarations: [
    YuqinshanComponent,
    PrevDirective,
    NextDirective,
    PackagingWorkComponent,
    ProductOneComponent,
    ProductTwoComponent,
    ProductThreeComponent,
    ProductFourComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExternalLinkModule { }
