import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LZcommonTableComponent } from '../../lib/lzTableComponent/commonTable/lzcommon-table.component';
import { GoodsAddComponent } from './pages/goods-add/goods-add.component';

@Component({
  selector: 'app-extend-table',
  templateUrl:'./extend-table.component.html',
  styleUrls: ['./extend-table.component.scss']
})
export class ExtendTableComponent extends LZcommonTableComponent implements OnInit {
  detailClick(event, data, idx) {
    super.detailClick(event, data, idx);
  }

  // //????
  // addDataClick() {
  //  let a = this.modalSev.open({
  //     title:"add",
  //     content:GoodsAddComponent,
  //     onOk(e){
  //       console.info(e);
  //     }
  //   })
  //   a.subscribe(
  //     obj => {
  //       console.info("obj =>",obj)
  //     }
  //   )
  // }

}
