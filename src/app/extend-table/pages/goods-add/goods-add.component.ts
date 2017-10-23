import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BaseHttpService } from '../../../../app/base-http-service/base-http.service';
import { FormItemElementEM, FormItemTypeEM } from '../../../../lib/lzTableComponent/enum/form-item.enum';
import { NzMessageService,NzModalService } from 'ng-zorro-antd';
import { FormItemResourceComponent } from '../../../../lib/lzTableComponent/window-modal/form-item-resource/form-item-resource.component';

@Component({
  selector: 'goods-add',
  templateUrl: './goods-add.component.html',
  styleUrls: ['./goods-add.component.scss']
})
export class GoodsAddComponent implements OnInit {

  @Input() resid = '';
  @Output() eventNoti = new EventEmitter();//与lzcommontable组件通信

  _data:any = {
    C3_561648705356: null,
    C3_561648718493:null,
    C3_561648769212:null,
    C3_561648790262:null,
    C3_561648813629:null,
    C3_561648820757:null,
    C3_561648837854:null,
    C3_561648846303:null,
    C3_561648899389:null,
    C3_561648926062:null,
    C3_561648995990:null,
    C3_561649020170:null,
    C3_561649023008:null,
    C3_561649034242:null,
    C3_561649048171:null,
    C3_561649105932:null,
    C3_561649132110:null,
    C3_561649189367:null,
    C3_561649232312:null
  };
  _dataPropArr = [];

  _theMainModal: boolean = true;//是否打开formresource组件（false为打开）
  path: any;//appConfig中路径
  advDictionaryListData: any;//传递给formresource组件的数据
  data: any = {};
  title: any = {};
  titleArray:any = [];

  url: string = '';
  requestParams: any = {};
  requestDataType: number = -1;
  tabs:any[] = [];

  constructor(private httpSev:BaseHttpService,private messageSev:NzMessageService,private modalSev:NzModalService) { }

  ngOnInit() {
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    this.requestParams = {
      resid: 562075064438,
      pageIndex: 0,
      pageSize: 10,
      getcolumninfo: 1
    }
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
    this.tabs = [{
      isSubForm: false,
      formName: "default",
    }]

    this.getKeysData(this.resid)
  }

  //获取窗体的数据
  getKeysData(resid: string) {
    this.getData('add', resid).subscribe(
      data => {
        if (data && data.data && data.data.columns) {
          //筛选出字段类型数据
          this.titleArray = data.data.columns.filter(item => (item.ColName && item.ColName.length) || (item.FrmFieldFormType == FormItemElementEM.ImageForUrlCol));
          
          //筛选出image类型
          // tab.imgElementArr = data.data.columns.filter(item => item.FrmFieldFormType == FormItemElementEM.ImageForUrlCol);
          // tab.imgElementArr = this.imgElementAddColName(tab.imgElementArr);

          // this.titleArray = this.fixTitleForImgType(this.titleArray, tab.imgElementArr);

          Object.keys(this._data).forEach(key => {
            this._data[key] = this.titleArray.filter(item => item['ColName'] == key)[0] || {};
          })
        }
      },
      err => {
        // console.error(JSON.stringify(err));
      }
    )
  }

  getData(formName: string, resid: string) {
    let path = this.httpSev.path;
    let urlStr: string = path.baseUrl + path.getFormDefine;
    let params: any = {
      "resid": resid,//id
      "formname": formName//窗体名
    }
    return this.httpSev.baseRequest("GET", urlStr, params, -1);
  }

  findTitle(prop:string){
    const title = this.titleArray.filter(item => item['ColName'] == prop);
    if(title.length > 0) return title[0];
    else return {}
  }

  imgElementAddColName(data: Array<any>): Array<any> {
    data.forEach(item => {
      let frmColName = item.FrmColName;
      let index = frmColName.lastIndexOf("__") + 2;
      item['lzImgUrl'] = '';
      if (index >= 0) item.lzImgUrl = frmColName.substring(index, frmColName.length);
    })
    return data;
  }

  //´¦ÀíÍ¼Æ¬Ñ¡Ôñ¿Ø¼þµÄtype
  fixTitleForImgType(titleArr: Array<any>, imgElementArr: Array<any>): Array<any> {
    imgElementArr.forEach(imgEle => {
      titleArr.forEach(titleItem => {
        if (titleItem['ColName'] == imgEle.lzImgUrl) titleItem['ColValType'] = FormItemTypeEM.ImageSelect;
      })
    })
    return titleArr;
  }

  /*-------------子组件回调---------------*/
  formItemDynamicClick(note) {
    //打开formitemresource 组件
    let title = note['title'];
    this.advDictionaryListData = title.AdvDictionaryListData;
    
    this._theMainModal = false;
    this.modalSev.open({
      title:'查询',
      content:FormItemResourceComponent,
      footer:false,
      componentParams:{
        advDictionaryListData : this.advDictionaryListData,
        data:this.data,
        formItemResourceNoti:this.formItemResourceNoti
      }
    })
  }

  //formItemDynamic刷新数据
  update(note: any) {
    let a = Object.assign({}, this.data);
    this.data = a;
  }


  formItemResourceNoti(note: any) {
    if (note['name'] == 'close') this._theMainModal = true;
    else if (note['name'] == 'select') {//高级字典选择返回数据
      let data = note['data'];
      let title = note['title'];
      title = title.filter(item => item.CDZ2_TYPE == 0)//过滤字段，为1的不能匹配
      title.forEach(element => {
        let tmpData = Object.assign({}, this.data);
        tmpData[element.CDZ2_COL1] = data[element.CDZ2_COL2];
        this.data = tmpData;
        // console.info("字段" + element.CDZ2_COL2 + "匹配到" + element.CDZ2_COL1);
      });
      this._theMainModal = true;
    }
  }

  //提交事件(附表)
  submitClick() {
    let url = this.path.baseUrl + this.path.saveData;
    let params = {
      resid: this.resid,
      data:this.data
    }

    this.httpSev.baseRequest("POST", url, params, this.httpSev.dataT.AddOneDataEM).subscribe(
      data => {
        this.eventNoti.emit({ name: "update", data: this.data });//通知父组件更新数据
        // alert("save success" + JSON.stringify(data));
      },
      err => {
        this.messageSev.error("保存失败" + JSON.stringify(err));
      }
    )

  }
}
