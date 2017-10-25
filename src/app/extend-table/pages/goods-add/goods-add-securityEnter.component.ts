import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { SECURITY_ENTER_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-add-securityEnter',
  templateUrl: '../base-goods/base-goods-securityEnter.component.html'
})
export class GoodsAddSecurityEnterComponent extends BaseGoodsComponent implements OnInit {

  ngOnInit() {
    this._data = SECURITY_ENTER_DATAMAP;
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
