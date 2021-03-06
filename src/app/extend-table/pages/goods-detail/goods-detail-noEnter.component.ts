import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { NO_ENTER_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-detail-noEnter',
  templateUrl: '../base-goods/base-goods-noEnter.component.html'
})
export class GoodsDetailNoEnterComponent extends BaseGoodsComponent implements OnInit {

  @Output() closeNoti = new EventEmitter();

  ngOnInit() {
    this._data = NO_ENTER_DATAMAP;
    super.ngOnInit();
    this.detail = true;
  }

  //返回事件
  goBack() {
    this.closeNoti.emit();
  }

}
