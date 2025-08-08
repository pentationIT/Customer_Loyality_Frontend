import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { NotifierService } from 'angular-notifier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings} from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user_data = {} as any;

  status = '';
  user_list = [] as any;

  mainChannel_dropdownList = [] as any;
  mainChannel_selectedItems = [] as any;
  mainChannel_dropdownSettings:IDropdownSettings = {} as any;

  imdChannel_dropdownList = [] as any;
  imdChannel_selectedItems = [] as any;
  imdChannel_dropdownSettings:IDropdownSettings = {} as any

  subChannelCodeName_dropdownList = [] as any;
  subChannelCodeName_selectedItems = [] as any;
  subChannelCodeName_dropdownSettings:IDropdownSettings = {} as any;


  constructor(private rest : RestApiService, private notifier: NotifierService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getUserList();

    this.mainChannel_dropdownSettings = {
      singleSelection: false,
      idField: 'MAIN_CHANNEL_FINAL',
      textField: 'MAIN_CHANNEL_FINAL',
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
    
    this.get_mainChannel_list();
    this.get_imdChannel_list();
    this.get_subChannel_list();

  }

  getUserList(){
    const data = {
      status: this.status
    }
    this.rest.getUserList(data).subscribe((res:any)=>{
      if(res.success){
        this.user_list = res.result;
      }
      else{
        this.notifier.notify('error', 'Some error occurred')
      }
    })
  }

  openModal(modal:any){
    this.modalService.open(modal, {size:'lg'});
  }
  openConfirmation(modal:any){
    this.modalService.open(modal, {size:'sm'});

  }
  closeModal(){
    this.modalService.dismissAll()
  }
  getAccessUser(user_id:any){
    const data = {
      user_agent_id: user_id
    }
    this.rest.getAccessUser(data).subscribe((res:any)=>{
      if(res.success){
        this.user_data = res.user_data;
      } else{

      }
    })
  }
  get_mainChannel_list() {   
    const data = {
      
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
      // userAgentId: this.userAgentId,
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

  get_subChannel_list() {   
    const data = {
      // userAgentId: this.userAgentId,
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

  approveUser(){
    const data = {
      // userAgentId: this.userAgentId,
      user_data:this.user_data,

    } 
    this.rest.approveUser(data).subscribe((res: any) => {
      if (res.success) {        
        this.notifier.notify('success', 'Approved Successfully');
        this.getUserList();
        this.user_data = [] as any;
        this.modalService.dismissAll();

      } else {
        // this.common.openSnackBar('Something went wrong')
        this.notifier.notify('error', 'Something went wrong')
      }
    });
  }

  enableDisableUser(user_agent_id:any, action:any){
    const data = {
      // userAgentId: this.userAgentId,
      user_agent_id:user_agent_id,
      action:action

    } 
    this.rest.enableDisableUser(data).subscribe((res: any) => {
      if (res.success) {        
        this.getUserList();

        this.notifier.notify('success', res.message);
     

      } else {
        // this.common.openSnackBar('Something went wrong')
        this.notifier.notify('error', 'Something went wrong')
      }
    });
  }
}
