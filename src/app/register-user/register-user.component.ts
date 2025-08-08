import { Component, OnInit } from '@angular/core';
import { IDropdownSettings} from 'ng-multiselect-dropdown';
import { RestApiService } from '../rest-api.service';
import { NotifierService } from 'angular-notifier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  name = '';
  designation = '';
  organization = '';

  emailid = '';
  mobileno : null ;

  empId = '';

  mainChannel_dropdownList = [] as any;
  mainChannel_selectedItems = [] as any;
  mainChannel_dropdownSettings:IDropdownSettings = {} as any;

  imdChannel_dropdownList = [] as any;
  imdChannel_selectedItems = [] as any;
  imdChannel_dropdownSettings:IDropdownSettings = {} as any

  subChannelCodeName_dropdownList = [] as any;
  subChannelCodeName_selectedItems = [] as any;
  subChannelCodeName_dropdownSettings:IDropdownSettings = {} as any;

  constructor(
    private rest: RestApiService,
    private notifier: NotifierService,
    private modalService: NgbModal

  ) { }

  ngOnInit(): void {
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
  openConfirmation(modal:any){
    this.modalService.open(modal, {size:'sm'});

  }
  closeModal(){
    this.modalService.dismissAll();
  }
  registerUser(){

    if (this.name != '' && this.designation != '' && this.emailid != '' && this.empId != '' && this.organization != ''  && this.mobileno != null){

      const data = {
        username : this.name,
        designation: this.designation,
        empid: this.empId,
        organization: this.organization,
  
        emailid: this.emailid,
        mobileno: this.mobileno,
        mainchannel: this.mainChannel_selectedItems,
        imdchannel: this.imdChannel_selectedItems,
        subchannel: this.subChannelCodeName_selectedItems
      }
  
      this.rest.registerUser(data).subscribe((res: any) => {
        if (res.success) {        
          
          this.notifier.notify('success', res.message);
          this.ngOnInit();
  
        } else {
          this.notifier.notify('error', res.message);
  
        
        }
      });
    }else{
      this.notifier.notify('error', 'Please fill all the necessary details');

    }
  }
}
