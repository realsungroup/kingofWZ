import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { FACTORY_MOVE_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-detail-factoryMove',
  templateUrl: '../base-goods/base-goods-factoryMove.component.html'
})
export class GoodsDetailFactoryMoveComponent extends BaseGoodsComponent implements OnInit {

  @Output() closeNoti = new EventEmitter();

  ngOnInit() {
    this._data = FACTORY_MOVE_DATAMAP;
    super.ngOnInit();
    this.detail = true;
  }

  goBack() {
    this.closeNoti.emit();
  }

}
