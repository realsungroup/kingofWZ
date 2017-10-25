import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { MOVE_IN_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-detail-moveIn',
  templateUrl: '../base-goods/base-goods-moveIn.component.html'
})
export class GoodsDetailMoveInComponent extends BaseGoodsComponent implements OnInit {

  @Output() closeNoti = new EventEmitter();

  ngOnInit() {
    this._data = MOVE_IN_DATAMAP;
    super.ngOnInit();
    this.detail = true;
  }

  //返回事件
  close() {
    this.closeNoti.emit();
  }

}
