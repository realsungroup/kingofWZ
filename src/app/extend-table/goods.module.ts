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

import { GoodsAddNoEnterComponent } from './pages/goods-add/goods-add-noEnter.component';
import { GoodsOperationNoEnterComponent } from './pages/goods-operation/goods-operation-noEnter.component';
import { GoodsDetailNoEnterComponent } from './pages/goods-detail/goods-detail-noEnter.component';

import { GoodsAddSecurityEnterComponent } from './pages/goods-add/goods-add-securityEnter.component';
import { GoodsOperationSecurityEnterComponent } from './pages/goods-operation/goods-operation-securityEnter.component';
import { GoodsDetailSecurityEnterComponent } from './pages/goods-detail/goods-detail-securityEnter.component';

import { GoodsAddSecurityOutComponent } from './pages/goods-add/goods-add-securityOut.component';
import { GoodsOperationSecurityOutComponent } from './pages/goods-operation/goods-operation-securityOut.component';
import { GoodsDetailSecurityOutComponent } from './pages/goods-detail/goods-detail-securityOut.component';

import { GoodsAddFactoryMoveComponent } from './pages/goods-add/goods-add-factoryMove.component';
import { GoodsOperationFactoryMoveComponent } from './pages/goods-operation/goods-operation-factoryMove.component';
import { GoodsDetailFactoryMoveComponent } from './pages/goods-detail/goods-detail-factoryMove.component';

import { GoodsAddMoveInComponent } from './pages/goods-add/goods-add-moveIn.component';
import { GoodsOperationMoveInComponent } from './pages/goods-operation/goods-operation-moveIn.component';
import { GoodsDetailMoveInComponent } from './pages/goods-detail/goods-detail-moveIn.component';

import { FormItemDynamicComponent } from '../../lib/lzTableComponent/component/form-item-dynamic/form-item-dynamic.component';
import { ExtendTableComponent } from './extend-table.component';

import { LzcommonTableModule } from '../../lib/lzTableComponent/commonTable/lzcommon-table.module';
import { BaseGoodsComponent } from './pages/base-goods/base-goods.component';

// import { DataMapService } from './pages/providers/data-map.service';

const COMPONENTS = [
  GoodsAddNoEnterComponent,
  GoodsOperationNoEnterComponent,
  GoodsDetailNoEnterComponent,
  GoodsAddSecurityEnterComponent,
  GoodsOperationSecurityEnterComponent,
  GoodsDetailSecurityEnterComponent,
  GoodsAddSecurityOutComponent,
  GoodsOperationSecurityOutComponent,
  GoodsDetailSecurityOutComponent,
  GoodsAddFactoryMoveComponent,
  GoodsOperationFactoryMoveComponent,
  GoodsDetailFactoryMoveComponent,
  GoodsAddMoveInComponent,
  GoodsOperationMoveInComponent,
  GoodsDetailMoveInComponent
]

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
  entryComponents: [GoodsAddComponent],
  declarations: [GoodsDetailComponent, GoodsOperationComponent, GoodsAddComponent, ExtendTableComponent, BaseGoodsComponent, ...COMPONENTS],
  exports: [GoodsDetailComponent, GoodsOperationComponent, GoodsAddComponent, ExtendTableComponent, ...COMPONENTS]
})
export class GoodsModule { }
