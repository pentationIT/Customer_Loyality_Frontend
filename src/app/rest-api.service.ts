import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class RestApiService {
  // API_ROOT = 'https://ias-pent.bajajallianz.com/itpmoapi';
  // file_path = 'https://ias-pent.bajajallianz.com/itpmoapi/static';

  // API_ROOT = 'http://127.0.0.1:5010';
  // file_path = 'http://127.0.0.1:5010/static';  

  // API_ROOT = 'http://192.168.1.11:5010';
  // file_path = 'http://192.168.1.11:5010/static';

  // API_ROOT = 'http://172.20.1.24:5010';
  // file_path = 'http://172.20.1.24:5010/static';
  // use this when you are in pentation office kolkata 
  // API_ROOT = 'http://192.168.1.16:5010';
  // file_path = 'http://192.168.1.16:5010/static';
  // API_ROOT = 'http://192.168.1.9:5010';
  // file_path = 'http://192.168.1.9:5010/static';

  // use this when wfh dumdum
  // API_ROOT = 'http://192.168.29.164:5010';
  // file_path = 'http://192.168.29.164:5010/static';


  // this one is for client server
  API_ROOT = 'http://10.4.2.214:5000/';
  file_path = 'http://10.4.2.214:5000/static';

  
  // API_ROOT = 'http://10.4.3.196:5000';
  // file_path = 'http://10.4.3.196:5000/static';

  // API_ROOT = 'http://192.168.29.164:5020';
  // file_path = 'http://192.168.29.164:5020/static';

  // API_ROOT = 'http://10.33.195.171:5000';
  // file_path = 'http://10.33.195.171:5000/static';

  

  constructor(private http: HttpClient) {
  }

 
  

  login(data: any): any {
    return this.http.post(this.API_ROOT + '/report/login', JSON.stringify(data), httpOptions);
  }
  checkusername(data: any): any {
    return this.http.post(this.API_ROOT + '/report/checkusername', JSON.stringify(data), httpOptions);
  }
  get_zone_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getZoneList', JSON.stringify(data), httpOptions);
  }
  get_state_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getStateList', JSON.stringify(data), httpOptions);
  }
  get_location_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getLocationList', JSON.stringify(data), httpOptions);
  }
  get_businessCategory_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getBusinessCategoryList', JSON.stringify(data), httpOptions);
  }
  get_productCodeName_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getProductCodeList', JSON.stringify(data), httpOptions);
  }
  get_pAccLob_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getLOBList', JSON.stringify(data), httpOptions);
  }
  get_productCodeName_list_pent(data: any) {
    return this.http.post(this.API_ROOT + '/report/getProductCodeList_pent', JSON.stringify(data), httpOptions);
  }
  get_pAccLob_list_pent(data: any) {
    return this.http.post(this.API_ROOT + '/report/getLOBList_pent', JSON.stringify(data), httpOptions);
  }
  get_productCodeNameBS_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getProductCodeBSList', JSON.stringify(data), httpOptions);
  }
  getMainChannelList(data: any): any {
    return this.http.post(this.API_ROOT + '/report/getMainChannelList', JSON.stringify(data), httpOptions);
  }
  get_imdChannel_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getImdChannelList', JSON.stringify(data), httpOptions);
  }
  get_subChannelCodeName_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getSubChannelList', JSON.stringify(data), httpOptions);
  }
  get_imdCodeName_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getImdCodeList', JSON.stringify(data), httpOptions);
  }
  get_subImdCodeName_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getSubImdCodeList', JSON.stringify(data), httpOptions);
  }
  get_netPremiumSlab_list(data: any) {
    return this.http.post(this.API_ROOT + '/report/getPremiumSlabList', JSON.stringify(data), httpOptions);
  }
  get_subImdChannel_list(data: any): any {
    return this.http.post(this.API_ROOT + '/report/getSubImdChannelList', JSON.stringify(data), httpOptions);
  }

  saveFile(data: any): any {
    return this.http.post(this.API_ROOT + '/report/saveFile', data);
  }
  saveFilePenetration(data: any): any {
    return this.http.post(this.API_ROOT + '/penetration/saveFilePenetration', data);
  }
  saveFileUpsellOpp(data: any): any {
    return this.http.post(this.API_ROOT + '/upsell/saveFileUpsellOpp', data);
  }
  saveFilewinbackOpp(data: any): any {
    return this.http.post(this.API_ROOT + '/winback/saveFilewinbackOpp', data);
  }
  getFilteredResult(data: any, aopChecked:any): any {
    if (aopChecked){

      return this.http.post(this.API_ROOT + '/report/createSummaryReportWdAOP', JSON.stringify(data), httpOptions);
    }else{
      return this.http.post(this.API_ROOT + '/report/createSummaryReport', JSON.stringify(data), httpOptions);

    }
  }
  createMonthOnMonthReport(data: any): any {
    return this.http.post(this.API_ROOT + '/report/createMonthOnMonthReport', JSON.stringify(data), httpOptions);
  }



  submitMeetingTrackerData(data: any): any {
    return this.http.post(this.API_ROOT + '/meetingtracker/submitMeetingTrackerDetails', JSON.stringify(data), httpOptions);
  }




  // ------------------------------penetrationApi----------------------------------
  
  getZoneHeadList(data: any): any {
  
    return this.http.post(this.API_ROOT + '/penetration/getZoneHeadList', JSON.stringify(data), httpOptions);

  }
  getZRMList(data: any): any {
  
    return this.http.post(this.API_ROOT + '/penetration/getZRMList', JSON.stringify(data), httpOptions);

  }
  getZRM_GEOList(data: any): any {
  
    return this.http.post(this.API_ROOT + '/penetration/getZRM_GEOList', JSON.stringify(data), httpOptions);

  }
  getCircleHeadList(data: any): any {
  
    return this.http.post(this.API_ROOT + '/penetration/getCircleHeadList', JSON.stringify(data), httpOptions);

  }
  getSRMList(data: any): any {
  
    return this.http.post(this.API_ROOT + '/penetration/getSRMList', JSON.stringify(data), httpOptions);

  }


  getMappedLOBList_penetration(data: any): any {
    return this.http.post(this.API_ROOT + '/penetration/getMappedLOBList_penetration', JSON.stringify(data), httpOptions);
  }
  getRiderList_penetration(data: any): any {
    return this.http.post(this.API_ROOT + '/penetration/getRiderList_penetration', JSON.stringify(data), httpOptions);
  }
  getZoneList_penetration(data: any): any {
    // return this.http.post(this.API_ROOT + '/penetration/getZoneList_penetration', JSON.stringify(data), httpOptions);
    return this.http.post(this.API_ROOT + '/report/getZoneList', JSON.stringify(data), httpOptions);

  }
  getStateList_penetration(data: any): any {
    // return this.http.post(this.API_ROOT + '/penetration/getStateList_penetration', JSON.stringify(data), httpOptions);
    return this.http.post(this.API_ROOT + '/report/getStateList', JSON.stringify(data), httpOptions);

  }
  getLocationList_penetration(data: any): any {
    // return this.http.post(this.API_ROOT + '/penetration/getLocationList_penetration', JSON.stringify(data), httpOptions);
    return this.http.post(this.API_ROOT + '/report/getLocationList', JSON.stringify(data), httpOptions);

  }
  getMainChannelList_penetration(data: any): any {
    // return this.http.post(this.API_ROOT + '/penetration/getMainChannelList_penetration', JSON.stringify(data), httpOptions);
    return this.http.post(this.API_ROOT + '/report/getMainChannelList', JSON.stringify(data), httpOptions);

  }
  getSubChannelList_penetration(data: any): any {
    // return this.http.post(this.API_ROOT + '/penetration/getSubChannelList_penetration', JSON.stringify(data), httpOptions);
    return this.http.post(this.API_ROOT + '/report/getSubChannelList', JSON.stringify(data), httpOptions);

  }
  getMonthYearList(): any {
    return this.http.get(this.API_ROOT + '/penetration/getMonthYearList',  httpOptions);
  }
  getExpYearList(): any {
    return this.http.get(this.API_ROOT + '/winback/getExpYearList',  httpOptions);
  }
  penetrationSummaryReport(data: any): any {
    return this.http.post(this.API_ROOT + '/penetration/createSummaryReport', JSON.stringify(data), httpOptions);
  }
  winback_penetrationSummaryReport(data: any): any {
    return this.http.post(this.API_ROOT + '/winbackpenetration/createSummaryReport', JSON.stringify(data), httpOptions);
  }


  upsellOppSummaryReport(data: any): any {
    return this.http.post(this.API_ROOT + '/upsell/createSummaryReport', JSON.stringify(data), httpOptions);
  }
  downloadPolicyWiseReport_upsell(data: any): any {
    return this.http.post(this.API_ROOT + '/upsell/downloadPolicyWiseReport', JSON.stringify(data), httpOptions);
  }
  winbackOppSummaryReport(data: any): any {
    return this.http.post(this.API_ROOT + '/winback/createSummaryReport', JSON.stringify(data), httpOptions);
  }
  downloadPolicyWiseReport_winback(data: any): any {
    return this.http.post(this.API_ROOT + '/winback/downloadPolicyWiseReport', JSON.stringify(data), httpOptions);
  }

  ppcSummaryReport(data: any): any {
    return this.http.post(this.API_ROOT + '/ppc/createSummaryReport', JSON.stringify(data), httpOptions);
  }
  bucketmovementSummaryReport(data: any): any {
    return this.http.post(this.API_ROOT + '/bucketmovement/createSummaryReport', JSON.stringify(data), httpOptions);
  }

  waterfallSummaryReport(data: any): any {
    return this.http.post(this.API_ROOT + '/waterfall/createSummaryReport', JSON.stringify(data), httpOptions);
  }
  createMonthOnMonthReport_penetration(data: any): any {
    return this.http.post(this.API_ROOT + '/penetration/createMonthOnMonthReport', JSON.stringify(data), httpOptions);
  }
  changeUserPassword(data:any){
    return this.http.post(this.API_ROOT + '/register/changeUserPassword', JSON.stringify(data), httpOptions);

  }
  forgotPassword(data:any){
    return this.http.post(this.API_ROOT + '/register/forgotPassword', JSON.stringify(data), httpOptions);

  }
  registerUser(data: any): any {
    return this.http.post(this.API_ROOT + '/register/registerUser', JSON.stringify(data), httpOptions);
  }
  approveUser(data: any): any {
    return this.http.post(this.API_ROOT + '/register/approveUser', JSON.stringify(data), httpOptions);
  }
  getUserList(data: any): any {
    return this.http.post(this.API_ROOT + '/register/getUserList', JSON.stringify(data), httpOptions);
  }
  getAccessUser(data:any): any{
    return this.http.post(this.API_ROOT + '/register/getAccessUser', JSON.stringify(data), httpOptions);

  }
  enableDisableUser(data:any): any{
    return this.http.post(this.API_ROOT + '/register/enableDisableUser', JSON.stringify(data), httpOptions);

  }
}