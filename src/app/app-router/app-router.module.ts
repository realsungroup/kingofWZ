import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Route } from '@angular/router';

import { MainComponent } from '../main/main.component';
import { LoginComponent } from '../main/login/login.component';

import { ClearCacheComponent } from '../main/cache/clear-cache/clear-cache.component';
import { PassCardComponent } from '../main/apply/pass-card/pass-card.component';

const childRouts:Array<any> = [
  // { path: '', redirectTo: 'rsu', pathMatch: 'full'},
  { path: 'clearCache',component:ClearCacheComponent,link:'/main/clearCache'},
  { path: 'passCard',component:PassCardComponent,link:'/main/passCard'}
]

const routes: Array<any> = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent ,link:"/login"},
  { path: 'main', component: MainComponent ,children:childRouts,link:"/main"}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule {}
