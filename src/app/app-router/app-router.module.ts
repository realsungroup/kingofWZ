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

import { RsuManageComponent } from '../main/rsu-manage/rsu-edit/rsu-manage.component';
import { StaffListComponent } from '../main/rsu-manage/staff-list/staff-list.component';
import { StaffListExportComponent } from '../main/rsu-manage/staff-list-export/staff-list-export.component';
import { TeamEditComponent } from '../main/rsu-manage/team-edit/team-edit.component';
import { RsuPendComponent } from '../main/rsu-manage/rsu-pend/rsu-pend.component';

const childRouts:Array<any> = [
  // { path: '', redirectTo: 'rsu', pathMatch: 'full'},
  { path: 'clearCache',component:ClearCacheComponent,link:'/main/clearCache'},
  { path: 'passCard',component:PassCardComponent,link:'/main/passCard'},
  { path: 'passCardNoEnter',component:PassCardNoEnterComponent,link:'/main/passCardNoEnter'},
  { path: 'securityEnter',component:SecurityEnterComponent,link:'/main/securityEnter'},
  { path: 'securityOut',component:SecurityOutComponent,link:'/main/securityOut'},  
  { path: 'factoryMove',component:FactoryMoveComponent,link:'/main/factoryMove'},  
  { path: 'moveIn',component:MoveInComponent,link:'/main/moveIn'},
  
  { path: 'rsu',component:RsuManageComponent,link:'/main/rsu'},
  { path: 'staffList',component:StaffListComponent,link:'/main/staffList'},
  { path: 'staffListExport',component:StaffListExportComponent,link:'/main/staffListExport'},
  { path: 'teamEdit',component:TeamEditComponent,link:'/main/teamEdit'},
  { path: 'rsuPend',component:RsuPendComponent,link:'/main/rsuPend'}
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
