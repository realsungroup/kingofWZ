import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { SECURITY_OUT_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-add-securityOut',
  templateUrl: '../base-goods/base-goods-securityOut.component.html'
})
export class GoodsAddSecurityOutComponent extends BaseGoodsComponent implements OnInit {

  ngOnInit() {
    this._data = SECURITY_OUT_DATAMAP;
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
