import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
import { AppService } from '../../../app.service';
import { MainService } from '../../main.service';
import { Router } from '@angular/router';

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
  tabs = [];
  isEditCustomPosition = true;
  isAddCustomPosition = true;
  addFormName = 'add';

  constructor(private httpSev: BaseHttpService,private appSev:AppService,private mainSev:MainService,private router:Router) {
    this.mainSev.setBreadDataWithUrl(window.app["routesArr"], this.router.url);
  }

  ngOnInit() {
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    let passCard = this.appSev.app.pages['moveIn'];
    this.requestParams = passCard.requestParams;
    this.subResid = passCard.subResid;
    this.addFormName = passCard.addFormName;
    this.tabs = passCard.tabs;
    this.isEditCustomPosition = passCard.isEditCustomPosition;
    this.isAddCustomPosition = passCard.isEditCustomPosition;
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
  }

}
