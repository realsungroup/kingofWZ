import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service';

@Component({
  selector: 'app-move-in',
  templateUrl: './move-in.component.html',
  styleUrls: ['./move-in.component.scss']
})
export class MoveInComponent implements OnInit {

  url: string = '';
  requestParams: any = {};
  requestDataType: number = -1;
  subResid = '';

  constructor(private httpSev: BaseHttpService) {
  }

  ngOnInit() {
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    this.requestParams = {
      resid: 561753082516,
      pageIndex: 0,
      pageSize: 10,
      getcolumninfo: 1
    }
    this.subResid = '562179308149';
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
  }

}
