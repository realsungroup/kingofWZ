import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// import { LzcommonTableModule } from '../../../lib/lzTableComponent/commonTable/lzcommon-table.module';
import { GoodsModule } from '../../extend-table/goods.module';
import { PassCardComponent } from './pass-card/pass-card.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GoodsModule
  ],
  declarations: [PassCardComponent]
})
export class ApplyModule { }
