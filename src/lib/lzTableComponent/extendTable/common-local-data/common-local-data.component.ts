import { Component, OnInit, Input } from '@angular/core';
import { LZcommonTableComponent } from '../../commonTable/lzcommon-table.component';

@Component({
  selector: 'app-common-local-data',
  templateUrl: './common-local-data.component.html',
  styleUrls: ['./common-local-data.component.scss']
})
export class CommonLocalDataComponent extends LZcommonTableComponent implements OnInit {


  @Input() set ld_data(value){
     if(Array.isArray(value)) this._dataSet = value;
  }

  ngOnInit() {
  }

}
