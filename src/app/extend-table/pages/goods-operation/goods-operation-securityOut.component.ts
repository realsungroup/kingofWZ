import { Component, OnInit } from '@angular/core';
import { BaseGoodsComponent } from '../base-goods/base-goods.component';
import { SECURITY_OUT_DATAMAP } from '../providers/data-map.service';

@Component({
  selector: 'goods-operation-securityOut',
  templateUrl: '../base-goods/base-goods-securityOut.component.html'
})
export class GoodsOperationSecurityOutComponent extends BaseGoodsComponent implements OnInit {

  ngOnInit() {
    this._data = SECURITY_OUT_DATAMAP;
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
