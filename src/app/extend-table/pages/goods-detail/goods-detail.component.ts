import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { NEED_ENTER_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-detail',
  templateUrl: '../base-goods/base-goods.component.html'
})
export class GoodsDetailComponent extends BaseGoodsComponent implements OnInit {

  @Output() closeNoti = new EventEmitter();

  ngOnInit() {
    this._data = NEED_ENTER_DATAMAP;
    super.ngOnInit();
    this.detail = true;
  }
  
  close() {
    this.closeNoti.emit();
  }

}
