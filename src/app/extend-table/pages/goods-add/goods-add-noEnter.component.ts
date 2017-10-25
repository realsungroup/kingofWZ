import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { NEED_ENTER_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-add-noEnter',
  templateUrl: '../base-goods/base-goods-noEnter.component.html'
})
export class GoodsAddNoEnterComponent extends BaseGoodsComponent implements OnInit {

  ngOnInit() {
    this._data = NEED_ENTER_DATAMAP;
    super.ngOnInit();
  }

  //返回点击事件
  goBack() {
    this.eventNoti.emit({ name: "close" });
  }

  submitClick(){
    super.submitClick(this.httpSev.dataT.AddOneDataEM);
  }
}
