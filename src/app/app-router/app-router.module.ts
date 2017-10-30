import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Route } from '@angular/router';

import { MainComponent } from '../main/main.component';
import { LoginComponent } from '../main/login/login.component';

import { ClearCacheComponent } from '../main/cache/clear-cache/clear-cache.component';
import { PassCardComponent } from '../main/apply/pass-card/pass-card.component';
import { PassCardNoEnterComponent } from '../main/apply/pass-card-no-enter/pass-card-no-enter.component';
import { SecurityEnterComponent } from '../main/apply/security-enter/security-enter.component';
import { SecurityOutComponent } from '../main/apply/security-out/security-out.component';
import { FactoryMoveComponent } from '../main/apply/factory-move/factory-move.component';
import { MoveInComponent } from '../main/apply/move-in/move-in.component';

const childRouts:Array<any> = [
  // { path: '', redirectTo: 'passCard', pathMatch: 'full'},
  { path: 'clearCache',component:ClearCacheComponent,link:'/main/clearCache'},
  { path: 'passCard',component:PassCardComponent,link:'/main/passCard'},
  { path: 'passCardNoEnter',component:PassCardNoEnterComponent,link:'/main/passCardNoEnter'},
  { path: 'securityEnter',component:SecurityEnterComponent,link:'/main/securityEnter'},
  { path: 'securityOut',component:SecurityOutComponent,link:'/main/securityOut'},  
  { path: 'factoryMove',component:FactoryMoveComponent,link:'/main/factoryMove'},  
  { path: 'moveIn',component:MoveInComponent,link:'/main/moveIn'}
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
