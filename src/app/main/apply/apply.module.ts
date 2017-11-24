import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GoodsModule } from '../../extend-table/goods.module';
import { PassCardComponent } from './pass-card/pass-card.component';
import { PassCardNoEnterComponent } from './pass-card-no-enter/pass-card-no-enter.component';
import { SecurityEnterComponent } from './security-enter/security-enter.component';
import { SecurityOutComponent } from './security-out/security-out.component';
import { FactoryMoveComponent } from './factory-move/factory-move.component';
import { MoveInComponent } from './move-in/move-in.component';
import { SecurityComponent } from './security/security.component';
import { SecurityPCheckComponent } from './security-p-check/security-p-check.component';
import {LzcommonTableModule} from '../../../lib/lzTableComponent/commonTable/lzcommon-table.module'
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GoodsModule,
    LzcommonTableModule
  ],
  declarations: [PassCardComponent, PassCardNoEnterComponent, SecurityEnterComponent, SecurityOutComponent, FactoryMoveComponent, MoveInComponent, SecurityComponent, SecurityPCheckComponent]
})
export class ApplyModule { }
