import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IDropdownSettings} from 'ng-multiselect-dropdown';
import { RestApiService } from '../rest-api.service';
import { NotifierService } from 'angular-notifier';
import { CommonService } from '../common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {


  noShowAopList = ['abin.george@bajajallianz.co.in', 'noman.khan@bajajallianz.co.in', 'suhas.shimpi01@bajajallianz.co.in', 'sanvi.sharma@bajajallianz.co.in', 'rajesh.wagh@bajajallianz.co.in', 'sanvi.sharma@bajajallianz.co.in'] as any;
  userEmail =  this.common.getUserEmail();

  aopChecked = false;

  sideNavOpen = true as boolean;

  // fd = new FormData;
  // fd2 = new FormData;

  imd_file_flag = 0;
  sub_imd_file_flag = 0;
  showDropdownImd = 0;
  showDropdownSubImd = 0;


  blockFilter = false;
  imdCode_search = '';
  subImdCode_search = ''

  imd_code = ''
  sub_imd_code = '';
  imdInfo = 0;
  subImdInfo = 0;



  userAgentId = this.common.getUserAgentId();
  agentType: any = this.common.getUserAgentType();
  rmCode: any = this.common.getUserRmCode();

  loadingStatus = false
  reportStatus = false
  reportCrossStatus = false
  reportStart = '' as any
  reportEnd = '' as any
  reportDuration = '' as any
  callCount = 0
  monthOnMonthFlag = 0;


  // for getting filter result
  channelList = [] as any
  subChannelList = [] as any
  cityList = [] as any
  productList = [] as any
  stateList = [] as any
  zonelList = [] as any
  lobList = [] as any

  monthYearList = [] as any;

  defaultimdchannelFlag = 0
  defaultlocationFlag = 0
  defaultproductCodeFlag = 0
  defaultstateFlag = 0
  defaultsubchannelFlag = 0
  defaultzoneFlag = 0
  defaultlobFlag = 0
  show_monthList = false as any


  





  
  // dropdownList = [] as any;
  // selectedItems = [] as any;
  // dropdownSettings:IDropdownSettings = {} as any

  summary_filteredResult = [] as any
  summary_mainColList = [] as any
  summary_keyColcount = 0 as any
  

  details_filteredResult = [] as any
  details_mainColList = [] as any
  details_keyColcount = 0 as any

  category_dropdownList = [{catName: 'Month on Month'}, {catName: 'YTD/MTD/LYTD/LYMTD/CYLMTD'}] as any;
  category_selectedItems = [] as any;

  category_dropdownSettings:IDropdownSettings = {} as any

  month_dropdownList = [] as any;
  month_selectedItems = [] as any;
  month_dropdownSettings:IDropdownSettings = {} as any

  zone_dropdownList = [] as any;
  zone_selectedItems = [] as any;
  zone_dropdownSettings:IDropdownSettings = {} as any

  state_dropdownList = [] as any;
  state_selectedItems = [] as any;
  state_dropdownSettings:IDropdownSettings = {} as any

  location_dropdownList = [] as any;
  location_selectedItems = [] as any;
  location_dropdownSettings:IDropdownSettings = {} as any

  businessCategory_dropdownList = [] as any;
  businessCategory_selectedItems = [] as any;
  businessCategory_dropdownSettings:IDropdownSettings = {} as any

  productCodeName_dropdownList = [] as any;
  productCodeName_selectedItems = [] as any;
  productCodeName_dropdownSettings:IDropdownSettings = {} as any

  pAccLob_dropdownList = [] as any;
  pAccLob_selectedItems = [] as any;
  pAccLob_dropdownSettings:IDropdownSettings = {} as any

  productCodeNameBS_dropdownList = [] as any;
  productCodeNameBS_selectedItems = [] as any;
  productCodeNameBS_dropdownSettings:IDropdownSettings = {} as any

  imdChannel_dropdownList = [] as any;
  imdChannel_selectedItems = [] as any;
  imdChannel_dropdownSettings:IDropdownSettings = {} as any

  subChannelCodeName_dropdownList = [] as any;
  subChannelCodeName_selectedItems = [] as any;
  subChannelCodeName_dropdownSettings:IDropdownSettings = {} as any

  imdCodeName_dropdownList = [] as any;
  imdCodeName_selectedItems = [] as any;
  imdCodeName_dropdownSettings:IDropdownSettings = {} as any

  subImdCodeName_dropdownList = [] as any;
  subImdCodeName_selectedItems = [] as any;
  subImdCodeName_dropdownSettings:IDropdownSettings = {} as any


  mainChannel_dropdownList = [] as any;
  mainChannel_selectedItems = [] as any;
  mainChannel_dropdownSettings:IDropdownSettings = {} as any

  // subImdChannel_dropdownList = [] as any;
  // subImdChannel_selectedItems = [] as any;
  // subImdChannel_dropdownSettings:IDropdownSettings = {} as any

  netPremiumSlab_dropdownList = [] as any;
  netPremiumSlab_selectedItems = [] as any;
  netPremiumSlab_dropdownSettings:IDropdownSettings = {} as any



  // user rights
  channelRight = this.common.getUser_channelRight()
  cityRight = this.common.getUser_cityRight()
  productRight = this.common.getUser_productRight()
  stateRight = this.common.getUser_stateRight()
  subChannelRight = this.common.getUser_subChannelRight()
  zoneRight = this.common.getUser_zoneRight()
  lobRight = this.common.getUser_lobRight()

  

  constructor(
    private rest: RestApiService,
    private notifier: NotifierService,
    private common: CommonService,
    private location: Location,
  ) { }

  ngOnInit(): void {  
    // this.location.replaceState('/customer loyality/jsljflkj/jjkfjskhd');
    this.setUpValuesInDropDown();  

    

    // this.getFilteredResult('summary', 0)
    // this.getFilteredResult('details', 0)

    // this.getAllMenuDropdownList().then(

    // )

    // this.getAllMenuDropdownList()

    this.reportStatus = false

    this.executeFunctions()
      .then(() => {
        
        this.callFilterResult('summary', 0, 1);
        // this.callFilterResult('details', 0, 1);
        // this.details_filteredResult = this.summary_filteredResult
        // this.details_mainColList = this.summary_mainColList
        // this.details_keyColcount = this.summary_keyColcount
      })
      .catch(error => {
        console.error('Error executing functions:', error);
      });

   
  // this.get_zone_list().then(data => this.get_state_list());
  
    
  }


  ngAfterViewInit() {
    // this.callFilterResult('summary', 0)
    // this.callFilterResult('details', 0)
  }
  checkImd(imd_code:any, checked:any){
    if (checked == true){
      this.imd_code = imd_code;
    }else{
      this.imd_code = "";
    }
  }

  checkSubImd(sub_imd_code:any, checked:any){
    if (checked == true){
      this.sub_imd_code = sub_imd_code;
    }else{
      this.sub_imd_code = "";
    }
  }

  saveFileImd(event:any){
    this.blockFilter = true;
    this.imd_file_flag = 1;

    const fd = new FormData();
    const files = event.target.files;
    // console.log("file details", files);
    // console.log("file details", files[0]);

    console.log("files>>>",files)

    fd.append('file', files[0]);
    // fd.append('id', '12');
    fd.append('userId', this.userAgentId);
    
    fd.append('fileType', 'imd');




    console.log(fd);

    this.rest.saveFile(fd).subscribe((res: any) => {
      if (res.success) {        
    this.blockFilter = false;

        // this.month_dropdownList = res.monthYearList
        // return this.zone_dropdownList
      } else {
    this.blockFilter = false;

      }
    });

  
  }

  removeFileImd(event:any){
    

    // this.fd = new FormData();
    event.target.files = {}
    // // console.log("file details", files);
    // // console.log("file details", files[0]);

    // console.log("files>>>",files)

    // this.fd.append('imd_file', files[0]);
    // this.fd.append('id', '12');

    // console.log(this.fd);

  
  }


  saveFileSubImd(event:any){
    this.blockFilter = true;
    this.sub_imd_file_flag = 1;
    

    const fd = new FormData();
    const files = event.target.files;
    // console.log("file details", files);
    // console.log("file details", files[0]);

    fd.append('file', files[0]);
    fd.append('userId', this.userAgentId);

    console.log(fd);
    fd.append('fileType', 'sub_imd');



    console.log(fd);

    this.rest.saveFile(fd).subscribe((res: any) => {
      if (res.success) {        
        this.blockFilter = false;

        // this.month_dropdownList = res.monthYearList
        // return this.zone_dropdownList
      } else {
        this.blockFilter = false;

      }
    });

  
  }
  getMonthYearList():any {  
    const data = {
      userAgentId: this.userAgentId
    }  
    this.rest.getMonthYearList().subscribe((res: any) => {
      if (res.success) {        
        this.month_dropdownList = res.monthYearList
        // return this.zone_dropdownList
      } else {
      }
    });
  }



  setUpValuesInDropDown(){ //multi dropdown settings-------------------
    this.category_dropdownSettings = {
      singleSelection: true,
      idField: 'catName',
      textField: 'catName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }
    this.mainChannel_dropdownSettings = {
      singleSelection: false,
      idField: 'MAIN_CHANNEL_FINAL',
      textField: 'MAIN_CHANNEL_FINAL',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }

    this.month_dropdownSettings = {
      singleSelection: false,
      idField: 'monthVal',
      textField: 'monthName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }

    this.imdCodeName_dropdownSettings = {
      singleSelection: true,
      idField: 'codeImd',
      textField: 'codeImd',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    }

    this.zone_dropdownSettings = {
      singleSelection: false,
      idField: 'ZONE',
      textField: 'ZONE',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }
    this.state_dropdownSettings = {
      singleSelection: false,
      idField: 'STATE',
      textField: 'STATE',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }
    this.location_dropdownSettings = {
      singleSelection: false,
      idField: 'OFFICE_LOCATION_CODE',
      textField: 'OFFICE_LOCATION_CODE',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }

    this.businessCategory_dropdownSettings = {
      singleSelection: false,
      idField: 'businessCategory',
      textField: 'businessCategory',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }

    this.productCodeName_dropdownSettings = {
      singleSelection: false,
      idField: 'PRODUCT_ID',
      textField: 'PRODUCT_ID',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }

    this.pAccLob_dropdownSettings = {
      singleSelection: false,
      idField: 'lobName',
      textField: 'lobName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }

    this.productCodeNameBS_dropdownSettings = {
      singleSelection: false,
      idField: 'productCodeBS',
      textField: 'productCodeBS',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }

    this.imdChannel_dropdownSettings = {
      singleSelection: false,
      idField: 'imdChannel',
      textField: 'imdChannel',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }

    this.subChannelCodeName_dropdownSettings = {
      singleSelection: false,
      idField: 'subChannelName',
      textField: 'subChannelName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }
    
    this.subImdCodeName_dropdownSettings = {
      singleSelection: true,
      idField: 'subImdCode',
      textField: 'subImdCode',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }

    // this.subImdChannel_dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'subImdChannel',
    //   textField: 'subImdChannel',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // }

    this.netPremiumSlab_dropdownSettings = {
      singleSelection: false,
      idField: 'premiumSlab',
      textField: 'premiumSlab',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }
  }

  executeFunctions(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.loadingStatus = true


      this.get_mainChannel_list()

      this.getMonthYearList()
      this.get_zone_list()
      this.get_state_list()
      this.get_location_list()
      this.get_businessCategory_list()
      this.get_productCodeName_list()
      this.get_pAccLob_list()
      this.get_productCodeNameBS_list()
      this.get_imdChannel_list()
      this.get_subChannelCodeName_list()
      this.get_imdCodeName_list()
      this.get_netPremiumSlab_list()
      this.get_subImdCodeName_list()
      // this.get_subImdChannel_list()
      
      // Simulate some async behavior for demonstration purposes
      setTimeout(() => {
        resolve();
      }, 3000); // Adjust the delay as needed
    });
  }


  setUpDataForFilter(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if(this.channelRight == 'default' && this.imdChannel_selectedItems.length == 0){
        this.channelList = this.imdChannel_dropdownList
        this.defaultimdchannelFlag = 1
      }
      else{
        this.channelList = this.imdChannel_selectedItems
        this.defaultimdchannelFlag = 0
      }
  
      if(this.cityRight == 'default' && this.location_selectedItems.length == 0){
        this.cityList = this.location_dropdownList
        this.defaultlocationFlag = 1
      }
      else{
        this.cityList = this.location_selectedItems
        this.defaultlocationFlag = 0
      }
  
      if(this.productRight == 'default' && this.productCodeName_selectedItems.length == 0){
        this.productList = this.productCodeName_dropdownList
        this.defaultproductCodeFlag = 1
      }
      else{
        this.productList = this.productCodeName_selectedItems
        this.defaultproductCodeFlag = 0
      }
  
      if(this.stateRight == 'default' && this.state_selectedItems.length == 0){
        this.stateList = this.state_dropdownList
        this.defaultstateFlag = 1
      }
      else{
        this.stateList = this.state_selectedItems
        this.defaultstateFlag = 0
      }
  
      if(this.subChannelRight == 'default' && this.subChannelCodeName_selectedItems.length == 0){
        this.subChannelList = this.subChannelCodeName_dropdownList
        this.defaultsubchannelFlag = 1
      }
      else{
        this.subChannelList = this.subChannelCodeName_selectedItems
        this.defaultsubchannelFlag = 0
      }
  
      if(this.zoneRight == 'default' && this.zone_selectedItems.length == 0){
        this.zonelList = this.zone_dropdownList
        this.defaultzoneFlag = 1
      }
      else{
        this.zonelList = this.zone_selectedItems
        this.defaultzoneFlag = 0
      }
      


      if(this.lobRight == 'default' && this.pAccLob_selectedItems.length == 0){
        this.lobList = this.pAccLob_dropdownList
        this.defaultlobFlag = 1
      }
      else{
        this.lobList = this.pAccLob_selectedItems
        this.defaultlobFlag = 0
      }
      // Simulate some async behavior for demonstration purposes
      setTimeout(() => {
        resolve();
      }, 20); // Adjust the delay as needed
    });
  }
 
  // onItemSelect(item: any) {
  //   console.log(item);
  // }
  // onSelectAll(items: any) {
  //   console.log(items);
  // }

  get_zone_list():any {  
    const data = {
      userAgentId: this.userAgentId
    }  
    this.rest.get_zone_list(data).subscribe((res: any) => {
      if (res.success) {        
        this.zone_dropdownList = res.zoneList
        // return this.zone_dropdownList

      } else {
        // return this.zone_dropdownList
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_state_list() {    
    const data = {
      selectedZoneList: this.zone_selectedItems,
      userAgentId: this.userAgentId
    }
    this.rest.get_state_list(data).subscribe((res: any) => {
      if (res.success) {        
        this.state_dropdownList = res.stateList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_location_list() {   
    const data = {
      selectedZoneList: this.zone_selectedItems,
      selectedStateList: this.state_selectedItems,
      userAgentId: this.userAgentId
    } 
    this.rest.get_location_list(data).subscribe((res: any) => {
      if (res.success) {        
        this.location_dropdownList = res.locationList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_businessCategory_list() {   
    const data = {
      userAgentId: this.userAgentId
    } 
    this.rest.get_businessCategory_list(data).subscribe((res: any) => {
      if (res.success) {        
        this.businessCategory_dropdownList = res.businessCategoryList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_productCodeName_list() {   
    const data = {
      lobName : this.pAccLob_selectedItems,
      userAgentId: this.userAgentId
    } 
    this.rest.get_productCodeName_list(data).subscribe((res: any) => {
      if (res.success) {        
        this.productCodeName_dropdownList = res.productCodeList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_pAccLob_list() {  
    const data = {
      userAgentId: this.userAgentId
    }

    this.rest.get_pAccLob_list(data).subscribe((res: any) => {
      if (res.success) {        
        this.pAccLob_dropdownList = res.lobList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_productCodeNameBS_list() {  
    const data = {
      userAgentId: this.userAgentId
    }  
    this.rest.get_productCodeNameBS_list(data).subscribe((res: any) => {
      if (res.success) {        
        this.productCodeNameBS_dropdownList = res.productCodeBSList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_mainChannel_list() {   
    const data = {
      userAgentId: this.userAgentId
    } 
    this.rest.getMainChannelList(data).subscribe((res: any) => {
      if (res.success) {        
        this.mainChannel_dropdownList = res.mainChannelList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_imdChannel_list() {   
    const data = {
      userAgentId: this.userAgentId,
      mainChannel:this.mainChannel_selectedItems
    } 
    this.rest.get_imdChannel_list(data).subscribe((res: any) => {
      if (res.success) {        
        this.imdChannel_dropdownList = res.imdChannelList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_subChannelCodeName_list() {   
    const data = {
      userAgentId: this.userAgentId,
      mainChannel:this.mainChannel_selectedItems,
      imdChannel:this.imdChannel_selectedItems,


    } 
    this.rest.get_subChannelCodeName_list(data).subscribe((res: any) => {
      if (res.success) {        
        this.subChannelCodeName_dropdownList = res.subChannelList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_imdCodeName_list() {    
    const data = {
      userAgentId: this.userAgentId,
      imdCode_search: this.imdCode_search,
      mainChannel: this.mainChannel_selectedItems,
      imdChannel: this.imdChannel_selectedItems,
      subChannel: this.subChannelCodeName_selectedItems,
    }
    this.rest.get_imdCodeName_list(data).subscribe((res: any) => {
      if (res.success) {       
        this.imdCodeName_dropdownList = res.imdCodeList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_netPremiumSlab_list() {   
    const data = {
      userAgentId: this.userAgentId
    } 
    this.rest.get_netPremiumSlab_list(data).subscribe((res: any) => {
      if (res.success) {        
        this.netPremiumSlab_dropdownList = res.premiumSlabList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  get_subImdCodeName_list() {  
    const data = {
      imdCode: this.imdCodeName_selectedItems,
      userAgentId: this.userAgentId,
      subImdCode_search: this.subImdCode_search,

      mainChannel: this.mainChannel_selectedItems,
      imdChannel: this.imdChannel_selectedItems,
      subChannel: this.subChannelCodeName_selectedItems
    }  
    this.rest.get_subImdCodeName_list(data).subscribe((res: any) => {
      if (res.success) {        
        this.subImdCodeName_dropdownList = res.subImdCodeList
      } else {
        // this.common.openSnackBar('Something went wrong')
        // this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  // get_subImdChannel_list() {  
  //   const data = {
  //     imdChannel: this.imdChannel_selectedItems,
  //     userAgentId: this.userAgentId
  //   }  
  //   this.rest.get_subImdChannel_list(data).subscribe((res: any) => {
  //     if (res.success) {        
  //       this.subImdChannel_dropdownList = res.subImdChannelList
  //     } else {
  //       // this.common.openSnackBar('Something went wrong')
  //       // this.notifier.notify('error', 'Something went wrong')
  //     }
  //   });
  // }

  callFilterResult(reportType: any, isdownload:any, firstCall:any){

    this.setUpDataForFilter()
      .then(() => {
        // this.callFilterResult('summary', 0)
        // this.callFilterResult('details', 0)
        if (firstCall == 1){

          this.getFilteredResult(reportType, isdownload, firstCall)
        }
        if(this.category_selectedItems.length != 0 && this.category_selectedItems[0].catName == 'Month on Month' && this.aopChecked == false){

          // monthONmonth selected but month not selected
          if(this.month_selectedItems.length == 0 ){
            window.alert('for Month on Month filter you have to chose atleast one month')
          }

          // both monthONmonth and month selected
          else if(this.month_selectedItems.length != 0 ){
            this.monthOnMonthFlag = 1;
            this.createMonthOnMonthReport(reportType, isdownload, firstCall)
          }

          // when ytd/mtd is selected (this time monthList will not be visible)
          else{
            // this.monthOnMonthFlag = 0;
            // this.getFilteredResult(reportType, isdownload, firstCall)
          }
        } 

        // Nothing is  selected between monthONmonth & ytd/mtd
        else{
          this.monthOnMonthFlag = 0;

          this.getFilteredResult(reportType, isdownload, firstCall)
        }
      })
      .catch(error => {
        console.error('Error executing functions:', error);
      });
    // this.getFilteredResult(reportType, isdownload, this.zonelList, this.stateList, this.cityList, this.channelList, this.subChannelList, this.productList)
  }
  show_Hide_monthYear_list(){
    // let findVal = ''
    console.log(this.category_selectedItems)
    if(this.category_selectedItems.length != 0){
      for(let val of this.category_selectedItems){
        if(val.catName == 'Month on Month'){
          console.log('val--------------',val)
          this.show_monthList = true
        }
        else{
          this.show_monthList = false
          this.month_selectedItems = []
        }
      }
    }
    else{this.show_monthList = false}
  }

  createMonthOnMonthReport(reportType: any, isdownload:any, firstCall:any){

    this.loadingStatus = true
    this.reportStatus = false

    if (this.imd_code != "" ){
      this.imdCodeName_selectedItems = [{"codeImd":this.imd_code}]
    }else{
      this.imdCodeName_selectedItems = [];
    }

    if (this.sub_imd_code != "" ){
      this.subImdCodeName_selectedItems = [{"subImdCode":this.sub_imd_code}]
    }else{
      this.subImdCodeName_selectedItems = [];
    }

    const data = {

      imd_file_flag: this.imd_file_flag,
      sub_imd_file_flag: this.sub_imd_file_flag,
      
      agentType: this.agentType,
      rmCode: this.rmCode,
      firstCall: firstCall,
      userAgentId: this.userAgentId,
      isDownload: isdownload,
      reportType:reportType,
      monthYear: this.month_selectedItems,
      mainChannel : this.mainChannel_selectedItems,
      state: this.stateList,
      zone: this.zonelList,
      locationCode: this.cityList,
      businessCategory: this.businessCategory_selectedItems,
      productCode: this.productList,
      productCodeBS: this.productCodeNameBS_selectedItems,
      lob: this.lobList,
      imdChannel: this.channelList,
      subChannelCodeName: this.subChannelList,
      imdCodeName: this.imdCodeName_selectedItems,
      subImdCodeName: this.subImdCodeName_selectedItems,
      // subImdChannel: this.subImdChannel_selectedItems,
      netPremiumSlab: this.netPremiumSlab_selectedItems,
      defaultimdchannelFlag: this.defaultimdchannelFlag,
      defaultlocationFlag: this.defaultlocationFlag,
      defaultproductCodeFlag: this.defaultproductCodeFlag,
      defaultstateFlag: this.defaultstateFlag,
      defaultsubchannelFlag: this.defaultsubchannelFlag,
      defaultzoneFlag: this.defaultzoneFlag,
      defaultlobFlag: this.defaultlobFlag,
      
    }


    this.rest.createMonthOnMonthReport(data).subscribe((res: any) => {
      if (res.success) {  
        
        if(reportType=='summary'){
          this.summary_filteredResult = res.finalData
          this.summary_mainColList = res.finalColumns
          this.summary_keyColcount = res.keyColCount

          this.monthYearList = res.monthYearList;


          // console.log(this.summary_mainColList)
          this.reportStart = res.startTime
          this.reportEnd = res.endTime
          this.reportDuration = res.duration
          // if(firstCall == 1){
          //   this.details_filteredResult = this.summary_filteredResult
          //   this.details_mainColList = this.summary_mainColList
          //   this.details_keyColcount = this.summary_keyColcount
          // }
          if(firstCall != 1){this.reportStatus = true}
        }
        else{
          this.details_filteredResult = res.finalData
          this.details_mainColList = res.finalColumns
          this.details_keyColcount = res.keyColCount
          this.reportStart = res.startTime
          this.reportEnd = res.endTime
          this.reportDuration = res.duration
          this.monthYearList = res.monthYearList;

          // this.reportStatus = true
          if(firstCall != 1){this.reportStatus = true}
        }   

        if(isdownload == 1){
          window.open(this.rest.file_path + '/downloads/' + res.fileName )
        }

        this.loadingStatus = false


        setTimeout(function() {
          $('#reportTimePad').fadeOut('slow');
      }, 1000);
        // this.notifier.notify('success', res.message)
        
      } else {
        this.notifier.notify('error', res.message)
        this.loadingStatus = false
      }
    }, (err: any) => {
      console.log(err)
      this.notifier.notify('error', err.error.message);
      this.loadingStatus = false

    });


  }


  getFilteredResult(reportType: any, isdownload:any, firstCall:any){

    this.loadingStatus = true
    this.reportStatus = false
    if (this.imd_code != "" ){
      this.imdCodeName_selectedItems = [{"codeImd":this.imd_code}]
    }else{
      this.imdCodeName_selectedItems = [];
    }

    if (this.sub_imd_code != "" ){
      this.subImdCodeName_selectedItems = [{"subImdCode":this.sub_imd_code}]
    }else{
      this.subImdCodeName_selectedItems = [];
    }


    // this.fd.append('agentType', this.agentType);
    // this.fd.append('rmCode', this.rmCode);
    // this.fd.append('firstCall', firstCall);
    // this.fd.append('userAgentId', this.userAgentId);
    // this.fd.append('isDownload', isdownload);
    // this.fd.append('reportType', reportType);
    // this.fd.append('mainChannel', this.mainChannel_selectedItems);
    // this.fd.append('monthYear', this.month_selectedItems);
    // this.fd.append('state', this.stateList);
    // this.fd.append('zone', this.zonelList);
    // this.fd.append('locationCode', this.cityList);
    // this.fd.append('businessCategory', this.businessCategory_selectedItems);
    // this.fd.append('productCode', this.productList);
    // this.fd.append('productCodeBS', this.productCodeNameBS_selectedItems);
    // this.fd.append('lob', this.lobList);
    // this.fd.append('imdChannel', this.channelList);
    // this.fd.append('subChannelCodeName', this.subChannelList);
    // this.fd.append('imdCodeName', this.imdCodeName_selectedItems);
    // this.fd.append('subImdCodeName', this.subImdCodeName_selectedItems);
    // this.fd.append('agentType', this.agentType);

    // imdChannel: this.channelList,
    //   subChannelCodeName: this.subChannelList,
    //   imdCodeName: this.imdCodeName_selectedItems,
    //   subImdCodeName: this.subImdCodeName_selectedItems,
    //   // subImdChannel: this.subImdChannel_selectedItems,
    //   netPremiumSlab: this.netPremiumSlab_selectedItems,
    //   defaultimdchannelFlag: this.defaultimdchannelFlag,
    //   defaultlocationFlag: this.defaultlocationFlag,
    //   defaultproductCodeFlag: this.defaultproductCodeFlag,
    //   defaultstateFlag: this.defaultstateFlag,
    //   defaultsubchannelFlag: this.defaultsubchannelFlag,
    //   defaultzoneFlag: this.defaultzoneFlag,
    //   defaultlobFlag: this.defaultlobFlag,

    

    const data = {

      imd_file_flag: this.imd_file_flag,
      sub_imd_file_flag: this.sub_imd_file_flag,

      agentType: this.agentType,
      rmCode: this.rmCode,
      firstCall: firstCall,
      userAgentId: this.userAgentId,
      isDownload: isdownload,
      reportType:reportType,
      mainChannel : this.mainChannel_selectedItems,
      monthYear: this.month_selectedItems,
      state: this.stateList,
      zone: this.zonelList,
      locationCode: this.cityList,
      businessCategory: this.businessCategory_selectedItems,
      productCode: this.productList,
      productCodeBS: this.productCodeNameBS_selectedItems,
      lob: this.lobList,
      imdChannel: this.channelList,
      subChannelCodeName: this.subChannelList,
      imdCodeName: this.imdCodeName_selectedItems,
      // imdCodeName: [{"codeImd":this.imd_code}],

      subImdCodeName: this.subImdCodeName_selectedItems,
      // subImdChannel: this.subImdChannel_selectedItems,
      netPremiumSlab: this.netPremiumSlab_selectedItems,
      defaultimdchannelFlag: this.defaultimdchannelFlag,
      defaultlocationFlag: this.defaultlocationFlag,
      defaultproductCodeFlag: this.defaultproductCodeFlag,
      defaultstateFlag: this.defaultstateFlag,
      defaultsubchannelFlag: this.defaultsubchannelFlag,
      defaultzoneFlag: this.defaultzoneFlag,
      defaultlobFlag: this.defaultlobFlag,
    }

    // for (const [key, value] of Object.entries(data)) {
    //   console.log(key, value);
    // this.fd.append(key, value);


    // }


    this.rest.getFilteredResult(data, this.aopChecked).subscribe((res: any) => {
      if (res.success) {  
    // this.fd = new FormData;

        
        if(reportType=='summary'){
          this.summary_filteredResult = res.finalData
          this.summary_mainColList = res.finalColumns
          this.summary_keyColcount = res.keyColCount
          // console.log(this.summary_mainColList)
          this.reportStart = res.startTime
          this.reportEnd = res.endTime
          this.reportDuration = res.duration
          if(firstCall == 1){
            this.details_filteredResult = this.summary_filteredResult
            this.details_mainColList = this.summary_mainColList
            this.details_keyColcount = this.summary_keyColcount
          }
          if(firstCall != 1){this.reportStatus = true}
          


        }
        else{
          this.details_filteredResult = res.finalData
          this.details_mainColList = res.finalColumns
          this.details_keyColcount = res.keyColCount
          this.reportStart = res.startTime
          this.reportEnd = res.endTime
          this.reportDuration = res.duration
          // this.reportStatus = true
          if(firstCall != 1){this.reportStatus = true}
          // console.log(this.summary_mainColList)
        }   

        if(isdownload == 1){
          window.open(this.rest.file_path + '/downloads/' + res.fileName )
        }

        this.loadingStatus = false
        // this.notifier.notify('success', res.message)


        setTimeout(function() {
          $('#reportTimePad').fadeOut('slow');
      }, 1000);
        
      } else {
        this.notifier.notify('error', res.message)
        this.loadingStatus = false
      }
    }, (err: any) => {
    // this.fd = new FormData;

      console.log(err)
      this.notifier.notify('error', err.error.message);
      this.loadingStatus = false

    });


  }

  resetAll(){
    // this.fd = [] as any;
    this.imd_file_flag = 0;
    this.sub_imd_file_flag = 0;
    let eleImd = document.getElementById('fileUpImd') as any;
    eleImd.value = "";

    let eleSubImd = document.getElementById('fileUpSubImd') as any;
    eleSubImd.value = "";

    


    // this.fd = new FormData;
    
    this.category_selectedItems = []

    this.month_selectedItems = []
    this.zone_selectedItems = []
    this.state_selectedItems = []
    this.location_selectedItems = []
    this.businessCategory_selectedItems = []
    this.productCodeName_selectedItems = []
    this.productCodeNameBS_selectedItems = []
    this.pAccLob_selectedItems = []
    this.imdChannel_selectedItems = []
    this.subChannelCodeName_selectedItems = []
    this.imdCodeName_selectedItems = []
    this.subImdCodeName_selectedItems = []
    // this.subImdChannel_selectedItems = []
    this.netPremiumSlab_selectedItems = []
    this.mainChannel_selectedItems = []


    // this.getMonthYearList()
    // this.get_mainChannel_list()

    // this.get_zone_list()
    // this.get_state_list()
    // this.get_location_list()
    // this.get_businessCategory_list()
    // this.get_productCodeName_list()
    // this.get_pAccLob_list()
    // this.get_productCodeNameBS_list()
    // this.get_imdChannel_list()
    // this.get_subChannelCodeName_list()
    // this.get_imdCodeName_list()
    // this.get_netPremiumSlab_list()
    // this.get_subImdCodeName_list()
    // // this.get_subImdChannel_list()

    // // this.getFilteredResult('summary', 0)
    // // this.getFilteredResult('details', 0)
    // this.getFilteredResult('summary', 0,1);
    this.ngOnInit();

  }

}

