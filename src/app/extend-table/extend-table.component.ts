import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LZcommonTableComponent } from '../../lib/lzTableComponent/commonTable/lzcommon-table.component';
import { GoodsAddComponent } from './pages/goods-add/goods-add.component';

@Component({
  selector: 'app-extend-table',
  templateUrl:'./extend-table.component.html'
})
export class ExtendTableComponent extends LZcommonTableComponent implements OnInit {
  @Input() pageName = '';
  @Input() subResid = '';
  @Input() editOperationOrginButton;
  @Input() addForm = false;
  ngOnInit(){
    super.ngOnInit();
  }

  detailClick(event, data, idx) {
    super.detailClick(event, data, idx);
  }

}
