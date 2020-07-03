/**
 * name:添加form数据页面
 */
import { Component, OnInit, Input } from "@angular/core";
import { ModalFormComponent } from "../modal-form/modal-form.component";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { FormItemElementEM } from "../../enum/form-item.enum";
import { FormItemResourceComponent } from "../form-item-resource/form-item-resource.component";
import { FormService } from "../../service/form.service";

@Component({
  selector: "app-add-form-data",
  templateUrl: "./add-form-data.component.html",
  styleUrls: ["./add-form-data.component.scss"],
})
export class AddFormDataComponent extends ModalFormComponent implements OnInit {
  @Input() addFormName: string; //添加数据的form
  @Input() resid: string; //主表ID
  @Input() recid: string;
  titleArray = [];
  titleElementArray = [];
  data: any = {};
  formHeight = 0;

  ngOnInit() {
    this.getData(this.addFormName, this.resid).subscribe(
      (data) => {
        this.titleArray = data.data.columns.filter(
          (item) =>
            (item.ColName && item.ColName.length) ||
            item.FrmFieldFormType == FormItemElementEM.ImageForUrlCol ||
            item.FrmFieldFormType == FormItemElementEM.ImageForInputform
        );
        this.titleElementArray = data.data.columns.filter(
          (item) => item.FrmFieldFormType == FormItemElementEM.Label
        );

        let formSelfArr = data.data.columns.filter(
          (item) => item.FrmFieldFormType == FormItemElementEM.FormSelf
        );
        if (Array.isArray(formSelfArr) && formSelfArr[0])
          this.formHeight = formSelfArr[0]["FrmHeight"] || 0;

        // let imgElementArr = data.data.columns.filter(item => item.FrmFieldFormType == FormItemElementEM.ImageForUrlCol);
        // imgElementArr = this.imgElementAddColName(imgElementArr);

        // this.titleArray = this.fixTitleForImgType(this.titleArray, imgElementArr);

        let specilTitleArr = [
          FormItemElementEM.ImageForUrlCol,
          FormItemElementEM.ImageForInputform,
        ];
        specilTitleArr.forEach((type) => {
          let elementArr = data.data.columns.filter(
            (item) => item.FrmFieldFormType == type
          );
          elementArr = this.formService.elementAddColName(elementArr);
          this.titleArray = this.formService.fixTitleForType(
            this.titleArray,
            elementArr,
            type
          );
        });
      },
      (err) => {
        this.messageSev.error("获取数据失败,错误信息:" + JSON.stringify(err));
      },
      () => {}
    );
  }

  submitClick() {
    if (this.titleArray["0"].ColDispName === "备注") {
      let path = this.httpSev.appConfig.path;
      let urlStr = path.baseUrl + path.saveData;
      let a = {
        REC_ID: this.recid,
      };
      // this.data.push(a)
      let params = {
        resid: this.resid,
        data: [
          { C3_588338237787: this.data.C3_586524155067, REC_ID: this.recid },
        ],
        // formname: this.addFormName,
        // REC_ID:this.recid
      };
      this.httpSev
        .baseRequest("POST", urlStr, params, this.httpSev.dataT.FixMoreDataEM)
        .subscribe(
          (data) => {
            if (data && data.Error == 0) {
              // this._theMainModal = true;
              // this.alertModal = true;
              // this.eventNoti.emit({ name: "close" });

              this.messageSev.success("备注成功！");
              this.eventNoti.emit({ name: "update", data: this.data }); //通知父组件更新数据
            } else if (data && data.Error < 0) {
              this._theMainModal = true;
              this.alertModal = true;
              this.messageSev.error(data.message);
            }
          },
          (err) => {
            this.messageSev.error("添加失败");
            return false;
          },
          () => {}
        );
    } else {
      // if(this.titleArray["0"].FrmIsNoNull == '1'){
      //   if(this.data.C3_561660086724 == undefined|| this.data.C3_561660086724 ==""){

      //   alert("请填写物品名称！");
      //   return false;
      //   }
      // }
      // if(this.titleArray["1"].FrmIsNoNull == '1'){
      //   if(this.data.C3_561660095455 == undefined|| this.data.C3_561660095455 ==""){

      //   alert("请填写单位！");
      //   return false;
      //   }
      // }
      // if(this.titleArray["2"].FrmIsNoNull == '1'){
      //   if(this.data.C3_561660118451 == undefined|| this.data.C3_561660118451 ==""){

      //   alert("请填写数量！");
      //   return false;
      //   }
      // }
      // if(this.titleArray["3"].FrmIsNoNull == '1'){
      //   if(this.data.C3_561812970226 == undefined|| this.data.C3_561812970226 ==""){

      //   alert("请上传附件1！");
      //   return false;
      //   }
      // }
      // if(this.titleArray["4"].FrmIsNoNull == '1'){
      //   if(this.data.C3_561812973382 == undefined|| this.data.C3_561812973382 ==""){

      //   alert("请上传附件2！");
      //   return false;
      //   }
      // }
      // if(this.titleArray["5"].FrmIsNoNull == '1'){
      //   if(this.data.C3_561812974789 == undefined|| this.data.C3_561812974789 ==""){

      //   alert("请上传附件3！");
      //   return false;
      //   }
      // }
      if (this.localDataState)
        this.eventNoti.emit({ name: "add", data: this.data });
      else {
        let path = this.httpSev.appConfig.path;
        let urlStr = path.baseUrl + path.saveData;
        let params = {
          resid: this.resid,
          data: this.data,
          formname: this.addFormName,
        };
        this.httpSev
          .baseRequest("POST", urlStr, params, this.httpSev.dataT.AddOneDataEM)
          .subscribe(
            (data) => {
              if (data && data.error == 0)
                this.eventNoti.emit({ name: "update", data: this.data });
              //通知父组件更新数据
              else if (data && data.error < 0) {
                this.messageSev.error(data["message"]);
              }
            },
            (err) => {
              this.messageSev.error("添加失败");
            },
            () => {}
          );
      }
    }
  }
}
