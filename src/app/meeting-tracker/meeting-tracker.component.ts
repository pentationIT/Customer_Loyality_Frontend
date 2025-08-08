import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { NotifierService } from 'angular-notifier';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-meeting-tracker',
  templateUrl: './meeting-tracker.component.html',
  styleUrls: ['./meeting-tracker.component.css']
})
export class MeetingTrackerComponent implements OnInit {

  meetingDate: any = '';
  discussionType: any = '';
  discussionType_list: any = ['Customer Loyalty/ Renewal', 'Customer Loyalty', 'Renewal'];
  businessStakeHolderName: any = '';
  businessStakeHolderChannel: any = '';
  businessStakeHolderSubChannel: any = '';
  currentRrPercentage: any = '';
  meetingDescription: any = '';
  userAgentId: any = this.common.getUserAgentId()

  constructor(private rest: RestApiService, private notifier : NotifierService, private common : CommonService) { }

  ngOnInit(): void {
    // console.log("meeting")
  }

  clearAll(){
    this.meetingDate = '';
    this.discussionType = '';
    this.businessStakeHolderName = '';
    this.businessStakeHolderChannel = '';
    this.businessStakeHolderSubChannel = '';
    this.currentRrPercentage = '';
    this.meetingDescription = '';
  }

  executeSubmitButton(){
    this.checkingOfInputData()
      .then(() => {        
        this.submit();
      })
      .catch(error => {
        console.error('Error executing functions:', error);
      });
  }  

  submit(){
    const data = {
      userAgentId : this.userAgentId,
      meetingDate : this.meetingDate,
      discussionType : this.discussionType,
      businessStakeHolderName : this.businessStakeHolderName,
      businessStakeHolderChannel : this.businessStakeHolderChannel,
      businessStakeHolderSubChannel : this.businessStakeHolderSubChannel,
      currentRrPercentage : this.currentRrPercentage,
      meetingDescription : this.meetingDescription
    }

    this.rest.submitMeetingTrackerData(data).subscribe((res: any) => {
      if (res.success) {        
        this.notifier.notify('success', 'Submitted Successfully')
        this.clearAll()
      } else {
        this.notifier.notify('error', 'Something went wrong')
      }
    }, (err: any) => {
      this.notifier.notify('error', 'Something went wrong');

    });
  }

  checkingOfInputData(){

    return new Promise<void>((resolve, reject) => {

      if(this.meetingDate == null || this.meetingDate == ''){
        window.alert("Please fill the Meeting Date")
        return
      }
      if(this.discussionType == null || this.discussionType == ''){
        window.alert("Please select the Discussion Type")
        return
      }
      if(this.businessStakeHolderName == null || this.businessStakeHolderName == ''){
        window.alert("Please fill the Business Stake Holder Name")
        return
      }
      if(this.businessStakeHolderChannel == null || this.businessStakeHolderChannel == ''){
        window.alert("Please fill the Business Stake Holder Channel")
        return
      }
      if(this.businessStakeHolderSubChannel == null || this.businessStakeHolderSubChannel == ''){
        window.alert("Please fill the Business Stake Holder Sub-Channel")
        return
      }
      if(this.currentRrPercentage == null || this.currentRrPercentage == ''){
        window.alert("Please fill the Current rr percentage")
        return
      }
      if(this.meetingDescription == null || this.meetingDescription == ''){
        window.alert("Please Write some Meeting Description")
        return
      }
      
      // Simulate some async behavior for demonstration purposes
      setTimeout(() => {
        resolve();
      }, 200); // Adjust the delay as needed
    });
    
  }
  

}
