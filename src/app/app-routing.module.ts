import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './home/about/about.component';

const routes: Routes = [
  {path: "首页", component: HomeComponent},
  {path: "关于我们", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
