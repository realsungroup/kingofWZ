import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoodsDetailComponent } from './pages/goods-detail/goods-detail.component';
import { GoodsOperationComponent } from './pages/goods-operation/goods-operation.component';
import { GoodsAddComponent } from './pages/goods-add/goods-add.component';
import { FormItemDynamicComponent } from '../../lib/lzTableComponent/component/form-item-dynamic/form-item-dynamic.component';
import { ExtendTableComponent } from './extend-table.component';

import { LzcommonTableModule } from '../../lib/lzTableComponent/commonTable/lzcommon-table.module';
import { BaseGoodsComponent } from './pages/base-goods/base-goods.component';

@NgModule({
  imports: [
    CommonModule,
    LzcommonTableModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  entryComponents:[GoodsAddComponent],
  declarations: [GoodsDetailComponent, GoodsOperationComponent,GoodsAddComponent,ExtendTableComponent, BaseGoodsComponent],
  exports:[GoodsDetailComponent, GoodsOperationComponent,GoodsAddComponent,ExtendTableComponent]
})
export class GoodsModule { }
