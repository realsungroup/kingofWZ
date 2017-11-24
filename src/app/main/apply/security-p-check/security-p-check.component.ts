import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { MainService } from '../../main.service';
import { LZcommonTableComponent } from '../../../../../src/lib/lzTableComponent/commonTable/lzcommon-table.component'
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-security-p-check',
  templateUrl: './security-p-check.component.html',
  styleUrls: ['./security-p-check.component.scss'],

  
})
export class SecurityPCheckComponent implements OnInit , AfterViewInit{
  url:string = ''
  requestParams = {}
  requestDataType = -1;
  tabs = [];
  childurl="";
  tabsA=[];
  tabsB=[];
  childrequestParams={};
  childrequestDataType=-1;
  isDetaillShow = false;
  alertModal:boolean=true;
  selectData = {};
  requestOverParams={};
  requestErrorParams={};
  operationButton=[{title:'审查',type:'default'},{title:'通过',type:'default'},{title:'拒绝',type:'default'}]
  @ViewChild("unpolicecheckTable")
  private unpolicecheckTableRef: LZcommonTableComponent;
  @ViewChild("requestOverPtable")
  private requestOverPtable: LZcommonTableComponent;
  @ViewChild("requestErrorPtable")
  private requestErrorPtable: LZcommonTableComponent;
  constructor(private httpSev: BaseHttpService,private appSev:AppService,private mainSev:MainService,private router:Router,private messageSev:NzMessageService ) { 
    this.mainSev.setBreadDataWithUrl(window.app["routesArr"], this.router.url)
  }
  closeModal(e){
    this.isDetaillShow = false;
  }
  ngAfterViewInit(){

   setTimeout(()=>{
     console.info("ngAfterViewInit",this.unpolicecheckTableRef)


   },2000);

  }
  ngOnInit() {
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    let passCard = this.appSev.app.pages['securityPoliceCheck'];
    this.requestParams = this.appSev.app.pages.securityPoliceCheck.requestParams;
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
    this.requestOverParams=this.appSev.app.pages.securityPoliceCheck.requestOverParams;
    this.requestErrorParams=this.appSev.app.pages.securityPoliceCheck.requestErrorParams;
  
    this.tabs = passCard.tabs;
    this.tabsA=passCard.tabsA;
    this.tabsB=passCard.tabsB;
  }
  operationBtnNoti(e){
    if(e.i == 0){
      this.isDetaillShow = true;
      this.selectData = e.data;
      let passCard = this.appSev.app.pages['securityPoliceCheck'];
      
      this.childurl = this.httpSev.path.baseUrl + this.httpSev.path.getSubData;
      this.childrequestParams = Object.assign({}, this.requestParams);
      this.childrequestParams['subResid'] =564596425727 ;
      this.childrequestParams['hostrecid'] = e.data['REC_ID'];
      delete this.childrequestParams['getcolumninfo'];
      this.childrequestDataType = this.httpSev.dataT.AttachTableDataEM;
    
    }


    else if (e.i == 1) {
      e.data.C3_561659022709 = 'Y'
      let url = this.httpSev.path.baseUrl + this.httpSev.path.saveData;
      let param = {
        resid: 561658879836,
        data: e.data,
      }
      this.httpSev.baseRequest('POST', url, param, this.httpSev.dataT.FixOneDataEM).subscribe(data => {
        console.info("data",data);
        if(data && (data.error == 0 || data.Error == 0)){
            this.unpolicecheckTableRef._refreshData();
            this.requestOverPtable._refreshData();
        }else{
          this.messageSev.error(data.message || '操作失败');
        }
      })

    } else {
      e.data.C3_561659022709="N"
      let url = this.httpSev.path.baseUrl + this.httpSev.path.saveData;
      let param = {
        resid: 561658879836,
        data: e.data,
      }
      this.httpSev.baseRequest('POST', url, param, this.httpSev.dataT.FixOneDataEM).subscribe(data => {
        console.info("data",data);
       if(data &&(data.error ==0|| data.Error==0)){
            this.unpolicecheckTableRef._refreshData();
            this.requestErrorPtable._refreshData();

       }else{
         this.messageSev.error(data.message||'操作失败');
       }


      })

    }


  }
}
