import { Component, OnInit,AfterViewInit, ViewChild, Output } from '@angular/core';
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
  
  _theModalName: string = 'main';//弹出窗体的控制变量
  _theMainModal:boolean = true;
  url:string = ''
  requestParams = {}
  requestDataType = -1;
  tabs = [];
  childurl="";
  tabsA=[];
  tabsB=[];
  tabsC=[];
  @Output() resid: string;//主表ID
  // @Output() formname: string;
  @Output() recid:string
  @Output() selectdata = [];
  childrequestParams={};
  childrequestDataType=-1;
  isDetaillShow = false;
  isDetaillOverShow=false;
  isDetaillErrorShow=false;
  isDetaillWaitShow=false;
  alertModal:boolean=true;
  selectDataC={};
  selectDataB={};
  selectDataD={};
  selectData = {};
  requestOverParams={};
  requestErrorParams={};
  requestWaitParams={};
  operationButtonB=[{title:'详情',type:'default'}]
  operationButtonC=[{title:'详情',type:'default'}]
  operationButton=[{title:'审查',type:'default'},{title:'通过',type:'default'},{title:'拒绝',type:'default'}]
  operationButtonD=[{title:'详情',type:'default'},{title:'确认带回',type:'default'}]
  // ,{title:'备注',type:'default'}
  @ViewChild("unpolicecheckTable")
  private unpolicecheckTableRef: LZcommonTableComponent;
  @ViewChild("requestOverPtable")
  private requestOverPtable: LZcommonTableComponent;
  @ViewChild("requestErrorPtable")
  private requestErrorPtable: LZcommonTableComponent;   
  @ViewChild("requestWaitPtable")
  private requestWaitPtable: LZcommonTableComponent;
  constructor(private httpSev: BaseHttpService,private appSev:AppService,private mainSev:MainService,private router:Router,private messageSev:NzMessageService ) { 
    this.mainSev.setBreadDataWithUrl(window.app["routesArr"], this.router.url)
  }
  closeModal(e){
    this.isDetaillShow = false;
  }
  closeOver(e){

    this.isDetaillOverShow=false;
  }
  closeError(e){
    this.isDetaillErrorShow=false;
  }
  closeWait(e){
    this.isDetaillWaitShow=false;
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
    this.requestWaitParams=this.appSev.app.pages.securityPoliceCheck.requestWaitParams;
  
    this.tabs = passCard.tabs;
    this.tabsA=passCard.tabsA;
    this.tabsB=passCard.tabsB;
    this.tabsC=passCard.tabsC;
  }
  operationBtnNotiB(e){
    if(e.i==0){
    this.isDetaillOverShow=true;
    this.selectDataB=e.data;
    let passCard = this.appSev.app.pages['securityPoliceCheck'];
    
    this.childurl = this.httpSev.path.baseUrl + this.httpSev.path.getSubData;
    this.childrequestParams = Object.assign({}, this.requestOverParams);
    this.childrequestParams['subResid'] =564596425727 ;
    this.childrequestParams['hostrecid'] = e.data['REC_ID'];
    delete this.childrequestParams['getcolumninfo'];
    this.childrequestDataType = this.httpSev.dataT.AttachTableDataEM;
    
    
    }
    
     }
  operationBtnNotiC(e){
    if(e.i==0){
    this.isDetaillErrorShow=true;
    this.selectDataB=e.data;
    let passCard = this.appSev.app.pages['securityPoliceCheck'];
    
    this.childurl = this.httpSev.path.baseUrl + this.httpSev.path.getSubData;
    this.childrequestParams = Object.assign({}, this.requestErrorParams);
    this.childrequestParams['subResid'] =564596425727 ;
    this.childrequestParams['hostrecid'] = e.data['REC_ID'];
    delete this.childrequestParams['getcolumninfo'];
    this.childrequestDataType = this.httpSev.dataT.AttachTableDataEM;
    
    
    }
    
     }  
     operationBtnNotiD(e){
       if(e.i==0){
       this.isDetaillWaitShow=true;
       this.selectDataB=e.data;
       let passCard = this.appSev.app.pages['securityPoliceCheck'];
       
       this.childurl = this.httpSev.path.baseUrl + this.httpSev.path.getSubData;
       this.childrequestParams = Object.assign({}, this.requestWaitParams);
       this.childrequestParams['subResid'] =564596425727 ;
       this.childrequestParams['hostrecid'] = e.data['REC_ID'];
       delete this.childrequestParams['getcolumninfo'];
       this.childrequestDataType = this.httpSev.dataT.AttachTableDataEM;
       
       }
       else if (e.i == 1) {
         e.data.C3_578762514302 = 'Y'
         let url = this.httpSev.path.baseUrl + this.httpSev.path.saveData;
         let param = {
           resid: 561658879836,
           data: e.data,
         }
         this.httpSev.baseRequest('POST', url, param, this.httpSev.dataT.FixOneDataEM).subscribe(data => {
           console.info("data",data);
           if(data && (data.error == 0 || data.Error == 0)){
               this.requestWaitPtable._refreshData();
               this.unpolicecheckTableRef._refreshData();
           }else{
             this.messageSev.error(data.message || '操作失败');
           }
         })
   
       } else if (e.i == 2) {
          this._theMainModal = false; 
            // this.resid = "561658879836"
            // this.formname = "default2"

            
      this.resid= "578756520789";//id
      // this.formname = "default2"//窗体名
      this.selectdata = e.data['C3_586524155067']
      let passCard = this.appSev.app.pages['securityPoliceCheck'];
       
      // this.childurl = this.httpSev.path.baseUrl + this.httpSev.path.getSubData;
      // this.childrequestParams = Object.assign({}, this.requestWaitParams);
      // this.childrequestParams['subResid'] =564596425727 ;
      this.childrequestParams['hostrecid'] = e.data['REC_ID'];
      this.recid = this.childrequestParams['hostrecid']
    // }
       }
       
        }  
        windowModalNoti() {
          this._theMainModal = true;
          
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    let passCard = this.appSev.app.pages['securityPoliceCheck'];
    let param = {
      resid: 578756520789,
      pageIndex:0,
      pageSize:50,
      getcolumninfo:1
    }
    

    this.requestParams = this.appSev.app.pages.securityPoliceCheck.requestParams;
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
    // this.requestOverParams=this.appSev.app.pages.securityPoliceCheck.requestOverParams;
    // this.requestErrorParams=this.appSev.app.pages.securityPoliceCheck.requestErrorParams;
    // this.requestWaitParams=this.appSev.app.pages.securityPoliceCheck.requestWaitParams;
  
    this.httpSev.baseRequest("GET", this.url, param, this.requestDataType).subscribe(
      data => {
        if (data && data.error == 0) {
          // this.titleArr = data['cmscolumninfo'];
          this.selectDataB = data['data'];
          // this._total = data['total'];
        } else {
          this.selectDataB  = [];
          // this._total = 0;
        }
        // this.copyData = [...this._dataSet];
      },
      error => {
        this.messageSev.error("获取数据失败");
        // this._loading = false;
      },
      () => {
        // this._loading = false;
      })
        }
        //编辑表单窗体回调事件
  modalFormNoti(notiObj: any) {
    if (notiObj && notiObj.name == 'close') {
      // this._theMainModal = false; 
      this.windowModalNoti();
      // this.windowModalNoti();
    } else if (notiObj && notiObj.name == 'update') {//刷新更新
      // this._theMainModal = false;
      this.windowModalNoti();
      // this._refreshData();
    } else if (notiObj && notiObj.name == 'update' && notiObj.data && notiObj.data.idx >= 0) {//本地更新（未用）

    }
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
            this.requestWaitPtable._refreshData();
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
            this.requestWaitPtable._refreshData();

       }else{
         this.messageSev.error(data.message||'操作失败');
       }


      })

    }


  }
}
