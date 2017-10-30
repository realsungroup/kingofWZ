import { Component, OnInit } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { FACTORY_MOVE_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-operation-factoryMove',
  templateUrl: '../base-goods/base-goods-factoryMove.component.html'
})
export class GoodsOperationFactoryMoveComponent extends BaseGoodsComponent implements OnInit {

  ngOnInit() {
    this._data = FACTORY_MOVE_DATAMAP;
    super.ngOnInit();
  }

  //返回点击事件
  goBack() {
    this.eventNoti.emit({ name: "close" });
  }

  submitClick(){
    super.submitClick(this.httpSev.dataT.SaveMore,'modified');
  }
}
