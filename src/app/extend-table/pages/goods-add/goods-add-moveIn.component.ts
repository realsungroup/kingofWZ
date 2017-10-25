import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { MOVE_IN_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-add-moveIn',
  templateUrl: '../base-goods/base-goods-moveIn.component.html'
})
export class GoodsAddMoveInComponent extends BaseGoodsComponent implements OnInit {

  ngOnInit() {
    this._data = MOVE_IN_DATAMAP;
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
